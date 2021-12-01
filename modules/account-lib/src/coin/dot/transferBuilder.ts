import { BaseCoin as CoinConfig } from '@bitgo/statics';
import { decode, methods } from '@substrate/txwrapper-polkadot';
import BigNumber from 'bignumber.js';
import { InvalidTransactionError } from '../baseCoin/errors';
import { TransactionBuilder } from './transactionBuilder';
import { Transaction } from './transaction';
import { UnsignedTransaction } from '@substrate/txwrapper-core';
import { TransactionType } from '../baseCoin';
import { MethodNames, ProxyArgs, proxyType, TransferArgs } from './iface';
import { ProxyTransactionSchema, TransferTransactionSchema } from './txnSchema';
import utils from './utils';
import { BaseAddress } from '../baseCoin/iface';

export class TransferBuilder extends TransactionBuilder {
  protected _amount: string;
  protected _to: string;
  protected _real: string;
  protected _forceProxyType: proxyType;

  constructor(_coinConfig: Readonly<CoinConfig>) {
    super(_coinConfig);
  }
  /**
   *
   * Dispatch the given call from an account that the sender is authorised for through add_proxy.
   *
   * @returns {UnsignedTransaction} an unsigned Dot transaction
   *
   * @see https://polkadot.js.org/docs/substrate/extrinsics/#proxy
   */
  protected buildTransaction(): UnsignedTransaction {
    const baseTxInfo = this.createBaseTxInfo();
    const transferTx = methods.balances.transferKeepAlive(
      {
        value: this._amount,
        dest: this._to,
      },
      baseTxInfo.baseTxInfo,
      baseTxInfo.options,
    );
    if (!this._real) {
      return transferTx;
    }
    return methods.proxy.proxy(
      {
        real: this._real,
        forceProxyType: this._forceProxyType,
        call: transferTx.method,
      },
      baseTxInfo.baseTxInfo,
      baseTxInfo.options,
    );
  }

  protected get transactionType(): TransactionType {
    return TransactionType.Send;
  }

  /**
   *
   * The amount for transfer transaction.
   *
   * @param {string} amount
   * @returns {TransferBuilder} This transfer builder.
   *
   * @see https://wiki.polkadot.network/docs/build-protocol-info
   */
  amount(amount: string): this {
    this.validateValue(new BigNumber(amount));
    this._amount = amount;
    return this;
  }

  /**
   *
   * The destination address for transfer transaction.
   *
   * @param {string} dest
   * @returns {TransferBuilder} This transfer builder.
   *
   * @see https://wiki.polkadot.network/docs/build-protocol-info
   */
  to({ address }: BaseAddress): this {
    this.validateAddress({ address });
    this._to = address;
    return this;
  }

  /**
   *
   * The real address of the original tx
   *
   * @param {BaseAddress} real
   * @returns {TransferBuilder} This builder.
   *
   * @see https://wiki.polkadot.network/docs/learn-proxies#why-use-a-proxy
   */
  real(real: BaseAddress): this {
    this.validateAddress({ address: real.address });
    this._real = real.address;
    return this;
  }

  /**
   *
   * The proxy type to execute
   *
   * @param {proxyType} forceProxyType
   * @returns {TransferBuilder} This builder.
   *
   * @see https://wiki.polkadot.network/docs/learn-proxies#proxy-types
   */
  forceProxyType(forceProxyType: proxyType): this {
    this._forceProxyType = forceProxyType;
    return this;
  }

  /** @inheritdoc */
  validateRawTransaction(rawTransaction: string): void {
    super.validateRawTransaction(rawTransaction);
    const decodedTxn = decode(rawTransaction, {
      metadataRpc: this._metadataRpc,
      registry: this._registry,
    });
    if (decodedTxn.method?.name === MethodNames.TransferKeepAlive) {
      const txMethod = decodedTxn.method.args as unknown as TransferArgs;
      const amount = `${txMethod.value}`;
      const to = txMethod.dest.id;
      const validationResult = TransferTransactionSchema.validate({ amount, to });
      if (validationResult.error) {
        throw new InvalidTransactionError(`Transfer Transaction validation failed: ${validationResult.error.message}`);
      }
    } else if (decodedTxn.method?.name === MethodNames.Proxy) {
      const txMethod = decodedTxn.method.args as unknown as ProxyArgs;
      const real = txMethod.real;
      const forceProxyType = txMethod.forceProxyType;
      const decodedCall = utils.decodeCallMethod(rawTransaction, {
        registry: this._registry,
        metadataRpc: this._metadataRpc,
      });
      const amount = `${decodedCall.value}`;
      const to = decodedCall.dest.id;
      const validationResult = ProxyTransactionSchema.validate({ real, forceProxyType, amount, to });
      if (validationResult.error) {
        throw new InvalidTransactionError(`Proxy Transaction validation failed: ${validationResult.error.message}`);
      }
    }
  }

  /** @inheritdoc */
  protected fromImplementation(rawTransaction: string): Transaction {
    const tx = super.fromImplementation(rawTransaction);
    if (this._method?.name === MethodNames.TransferKeepAlive) {
      const txMethod = this._method.args as TransferArgs;
      this.amount(txMethod.value);
      this.to({ address: utils.decodeDotAddress(txMethod.dest.id) });
    } else if (this._method?.name === MethodNames.Proxy) {
      const txMethod = this._method.args as ProxyArgs;
      this.real({ address: utils.decodeDotAddress(txMethod.real) });
      this.forceProxyType(txMethod.forceProxyType);
      const decodedCall = utils.decodeCallMethod(rawTransaction, {
        registry: this._registry,
        metadataRpc: this._metadataRpc,
      });
      if (!decodedCall.value || !decodedCall.dest) {
        throw new InvalidTransactionError(
          `Invalid Proxy Transaction Method: ${this._method?.name}. Expected transferKeepAlive`,
        );
      }
      this.amount(`${decodedCall.value}`);
      this.to({ address: utils.decodeDotAddress(decodedCall.dest.id) });
    } else {
      throw new InvalidTransactionError(
        `Invalid Transaction Type: ${this._method?.name}. Expected a transferKeepAlive or a proxy transferKeepAlive transaction`,
      );
    }
    return tx;
  }

  /** @inheritdoc */
  validateTransaction(_: Transaction): void {
    super.validateTransaction(_);
    this.validateFields(this._to, this._amount, this._real, this._forceProxyType);
  }

  private validateFields(to: string, amount: string, real?: string, forceProxyType?: string): void {
    const validationResult = forceProxyType
      ? ProxyTransactionSchema.validate({ to, amount, real, forceProxyType })
      : TransferTransactionSchema.validate({ amount, to });

    if (validationResult.error) {
      throw new InvalidTransactionError(
        `Proxy/TransferKeepAlive Transaction validation failed: ${validationResult.error.message}`,
      );
    }
  }
}
