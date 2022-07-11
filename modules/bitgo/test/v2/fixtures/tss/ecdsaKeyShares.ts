import { ECDSA } from '@bitgo/sdk-core';

export const keyShares = {
  userKeyShare: {
    pShare: {
      i: 1,
      l: 'db3351050283dcde3b2a8c782eb681d20d7efcdd0eac8822365160adfd46718e445faf989074fe44d08dbf8495742a5699b828bf1d39f199ac2fd64a06a1b595abd96f7a2dc16f848b3bc996e3e55bc7b6b419e0e382beaee8a6db3090bd1eb44d615ffe2891a68b488e54255997c81fef39dc65d8292784c87af47e3bc135ec65045d5af5323d56535d2b4a438c36333f2a5ec9db9260a5a0afb2b131e4e0526907c5adeecef5c5378121ec7a607cf821bc35baf5daff526626a9871decc3516c8f12c89198f7fbb5171e8f74dd65d81bd3c1dff951c5146a0329aae9328c880ee08ed8634ddb7f356ce57a32d85aa843fd944c3abc69628540c255d86ab2558d3f7761eb601b6c20f6650369fd4b30bdefac07c16572b5e5fdcc371c9d7ef6d2277d797772115512eb0ec3d19228ba22452d4841c00701830c008071c727cca402fc75c0769d3235707fd2f08fa46fe1999ff2e72a5cee736978067623d1152fab73addd55958cf8e9016629df331e0ad520f28a715242f7b1503ce51e42f0',
      m: '42e1d630db93e6ddc85febd319cbcaf78415e22c27f03154842e009d9360993c410ee19d2528b01021a6c551a3cbd169210ff3e595da642c9909d48c50dc8310a8994afd1bfe4e4688958812ee13182dc0c27d24cf6850e2851da3abdf02c0d7273925a30e5977563c8ef409c8643e9c722167031e17052197cf6e46774142ec61b6a944615b18ec5bc2889ba519c3c2f28720322b58fb146cc710839a3d785c7f63d93627d7f0a270d34ac1c3e1ab5e104e96793d1fb8e086246726106bf39140defe71293fb8f37c5650d6021487abd90475ba6586d1549a81156caf010d11f9e3aec06cf4e8bb56748fb49fa9dbf6f787b5c5a90a4c39a1a53d15c65eb1d96e3c35026977220787202d029997f1d75696bbf67d410020142c4da28910bf78beb28514c01851971d480bf79c301d39ef049aee524f8e5bb71199eae5622415b73c4c30b2f4799728aad044b9cd26ff24b06aad750083fb5dff984dfce788dfc447b9990790eb3d73f77ee63da5c938a45c5deb8ba387393bd62d73953fb0bd',
      n: 'db3351050283dcde3b2a8c782eb681d20d7efcdd0eac8822365160adfd46718e445faf989074fe44d08dbf8495742a5699b828bf1d39f199ac2fd64a06a1b595abd96f7a2dc16f848b3bc996e3e55bc7b6b419e0e382beaee8a6db3090bd1eb44d615ffe2891a68b488e54255997c81fef39dc65d8292784c87af47e3bc135ec65045d5af5323d56535d2b4a438c36333f2a5ec9db9260a5a0afb2b131e4e0526907c5adeecef5c5378121ec7a607cf821bc35baf5daff526626a9871decc353580738730a15a49a175787ddae52dc77fc03d6c8c3d72efffc1e50e3baabcb0647f992e45c3d55d0b81d7d65470a3424eb8a07297132ea32d3c14e14ddf578b1540efb776b6fd319fd8d3c469b1e398ad828a96621e11084625f58a56c6d63a2e94bd0e4cd2dfe2ee23b0fc49efa64420b3dda16bffb9bacddbffec507ec229d14d97d921a2f01cdf52a0e1c7c5307df39e6fb81255fc7e133e10f156256c5b4879b5669248eda8d9f5ed33302a34765c3dd5948ebdef816dc1fe4c8879ac4eb',
      y: '2aa91c1b6dea2402682e56309d48360905c8575a93f7786ccd58ec93f10b3224b',
      u: '5ecd1bc1f003e6897959dc478ad3bf7622d6c2b936df63f341b1ffb33866f4b3',
      chaincode: '6351051c2df469942a82fa03e720d583e94171fafb61ab88b2c82fbf68f41ab4',
    },
    nShares: {
      2: {
        i: 2,
        j: 1,
        n: 'db3351050283dcde3b2a8c782eb681d20d7efcdd0eac8822365160adfd46718e445faf989074fe44d08dbf8495742a5699b828bf1d39f199ac2fd64a06a1b595abd96f7a2dc16f848b3bc996e3e55bc7b6b419e0e382beaee8a6db3090bd1eb44d615ffe2891a68b488e54255997c81fef39dc65d8292784c87af47e3bc135ec65045d5af5323d56535d2b4a438c36333f2a5ec9db9260a5a0afb2b131e4e0526907c5adeecef5c5378121ec7a607cf821bc35baf5daff526626a9871decc353580738730a15a49a175787ddae52dc77fc03d6c8c3d72efffc1e50e3baabcb0647f992e45c3d55d0b81d7d65470a3424eb8a07297132ea32d3c14e14ddf578b1540efb776b6fd319fd8d3c469b1e398ad828a96621e11084625f58a56c6d63a2e94bd0e4cd2dfe2ee23b0fc49efa64420b3dda16bffb9bacddbffec507ec229d14d97d921a2f01cdf52a0e1c7c5307df39e6fb81255fc7e133e10f156256c5b4879b5669248eda8d9f5ed33302a34765c3dd5948ebdef816dc1fe4c8879ac4eb',
        y: '2aa91c1b6dea2402682e56309d48360905c8575a93f7786ccd58ec93f10b3224b',
        u: 'c09c02fef9c51e4d839e47c7d5bed49fbdca0d319b178b61cf3a187c423c96c3',
        chaincode: '6351051c2df469942a82fa03e720d583e94171fafb61ab88b2c82fbf68f41ab4',
      },
      3: {
        i: 3,
        j: 1,
        n: 'db3351050283dcde3b2a8c782eb681d20d7efcdd0eac8822365160adfd46718e445faf989074fe44d08dbf8495742a5699b828bf1d39f199ac2fd64a06a1b595abd96f7a2dc16f848b3bc996e3e55bc7b6b419e0e382beaee8a6db3090bd1eb44d615ffe2891a68b488e54255997c81fef39dc65d8292784c87af47e3bc135ec65045d5af5323d56535d2b4a438c36333f2a5ec9db9260a5a0afb2b131e4e0526907c5adeecef5c5378121ec7a607cf821bc35baf5daff526626a9871decc353580738730a15a49a175787ddae52dc77fc03d6c8c3d72efffc1e50e3baabcb0647f992e45c3d55d0b81d7d65470a3424eb8a07297132ea32d3c14e14ddf578b1540efb776b6fd319fd8d3c469b1e398ad828a96621e11084625f58a56c6d63a2e94bd0e4cd2dfe2ee23b0fc49efa64420b3dda16bffb9bacddbffec507ec229d14d97d921a2f01cdf52a0e1c7c5307df39e6fb81255fc7e133e10f156256c5b4879b5669248eda8d9f5ed33302a34765c3dd5948ebdef816dc1fe4c8879ac4eb',
        y: '2aa91c1b6dea2402682e56309d48360905c8575a93f7786ccd58ec93f10b3224b',
        u: '226aea3c038656118de2b34820a9e9ca9e0e7ac3500712949cefd2b87bdbf792',
        chaincode: '6351051c2df469942a82fa03e720d583e94171fafb61ab88b2c82fbf68f41ab4',
      },
    },
  },
  backupKeyShare: {
    pShare: {
      i: 2,
      l: '9f46c0195368fdcd4640eeb82542af7a7f4c28bfd382d9dbc8bbffde0db3f3d3bee2fd2ff6298297a5e318dc4db205884834900286e76c2db9fcd40ab8bc664d33f9c8f008d276c6f8538fae071e8efca164b75db93b4fe09a33aa0fa242ceb49dd9db4a92e21c2fe59febf0fd28ad3c92b0ad12484cd19ca06e6bd4d73571b0d94ee8a31e82be2860c4cbc55217c238a27fac302f26d69251649fe3b3ea7c898b90819e972181391e01ad0d778ef18d8ca2b3cedabf19d05e7a9d3d328e598cc388c9e848e14c6ed242038a134d1be907d66b78df920fd9187c6331ec3d2603b5c42d050805d71c9e1e1c835487d4c129aa40ece6b4eb53b2d960daca25938f0c3717232edb599e3d0ae894fc1005f9cfa1563ba3ff0eacc17e6d5636e4a3fedc273d55254f1271728d2577933ea28328229697a7b1a61343ecfea92beb53ad94ac7b4049bc25692689f9011014fd5284ab1cf6e83281a45f3c21929bc0f289e528e2632b716d175ac444c6a3b7bc66745acc721c54a4d39b5ceec127d108b0',
      m: '70c370c46b2fffce5dc3744edb11706d1764e5bcd726eac7376723df69a7094061bd975a904360c4b271417709271001da4bfe0e79ab649b130eadeaed23c3dedecfb9a4af97dda93cbe3739a9d3976ea860cfe4454932cedc2f4886c0bfe25789bde9df87dceb92db65fff12f35012cee9f28ef703f113e1e6b95e2eda807858752202221d559253a57524179839917e808a288858620ab594f89ca53fb7e914f6291a7257d19bec9866a2eb431aa5b530175416e1b3f96865fdbe5db0ed2660bd56e610f4a16af592ae45e4c23165216f8fd86038b10d511e2fc1d69e20f5ed760893bfb5b8efdc34775138afe893752771fc0a7084474c3dd97ad2a85d523c19db91b2e5334b00f9ed9c092549b36eec1be2bd3495a3079d2c988a6d6d23e8a68ea42ff63ef40a5fb3c599594dc3e61194857c7437c6aa7301e151d7efcb6b203c163b9353154fc98c35abe02ee7c89a90b06714ba8fbed418e23856119f7411ded7c790c0087c800c2c781a273d3713496e6de898040227d68dedba3efee',
      n: '9f46c0195368fdcd4640eeb82542af7a7f4c28bfd382d9dbc8bbffde0db3f3d3bee2fd2ff6298297a5e318dc4db205884834900286e76c2db9fcd40ab8bc664d33f9c8f008d276c6f8538fae071e8efca164b75db93b4fe09a33aa0fa242ceb49dd9db4a92e21c2fe59febf0fd28ad3c92b0ad12484cd19ca06e6bd4d73571b0d94ee8a31e82be2860c4cbc55217c238a27fac302f26d69251649fe3b3ea7c898b90819e972181391e01ad0d778ef18d8ca2b3cedabf19d05e7a9d3d328e598e660337e221b361f4d177b449b585a1bcbb7413a9f61f78a18566a9682e801936ed897a2815cd0b8722743763b0a50315a395e40a94a04bd0e64b8b8fa175229a8a513f0dd50c32f67558eed95ba280d36963ae0ceeccce3ab7636f9a58fa8de3cb5341c3d1466bd0e8c10dbe8d89958a32f761d34e6c13d74bee29888eaf2928445c919ce79efd470cbb9a867a5e2d2c4e1a7d2ef5ccd14fb4f08be5f34cc066f55dc73246293e4f5f2c0bb2ba70900ad09954f83d7cc9a1c569301129cf80b7',
      y: '310d0d5cacd1eb48ab80d40b508894312d13529e3c3695751854301cf5db27db0',
      u: '9867e9279dcb9b817ca6d2405304cddf724dc7140f9daf4a4cfc7973f2bffa68',
      chaincode: '944325645103f86e37b161aa62554468003988b0af30ec53e5f88d516e81af34',
    },
    nShares: {
      1: {
        i: 1,
        j: 2,
        n: '9f46c0195368fdcd4640eeb82542af7a7f4c28bfd382d9dbc8bbffde0db3f3d3bee2fd2ff6298297a5e318dc4db205884834900286e76c2db9fcd40ab8bc664d33f9c8f008d276c6f8538fae071e8efca164b75db93b4fe09a33aa0fa242ceb49dd9db4a92e21c2fe59febf0fd28ad3c92b0ad12484cd19ca06e6bd4d73571b0d94ee8a31e82be2860c4cbc55217c238a27fac302f26d69251649fe3b3ea7c898b90819e972181391e01ad0d778ef18d8ca2b3cedabf19d05e7a9d3d328e598e660337e221b361f4d177b449b585a1bcbb7413a9f61f78a18566a9682e801936ed897a2815cd0b8722743763b0a50315a395e40a94a04bd0e64b8b8fa175229a8a513f0dd50c32f67558eed95ba280d36963ae0ceeccce3ab7636f9a58fa8de3cb5341c3d1466bd0e8c10dbe8d89958a32f761d34e6c13d74bee29888eaf2928445c919ce79efd470cbb9a867a5e2d2c4e1a7d2ef5ccd14fb4f08be5f34cc066f55dc73246293e4f5f2c0bb2ba70900ad09954f83d7cc9a1c569301129cf80b7',
        y: '310d0d5cacd1eb48ab80d40b508894312d13529e3c3695751854301cf5db27db0',
        u: '38c919725608dcbbeeb073540ec8b6202640d549e9adf5390b66a4e619f11630',
        chaincode: '944325645103f86e37b161aa62554468003988b0af30ec53e5f88d516e81af34',
      },
      3: {
        i: 3,
        j: 2,
        n: '9f46c0195368fdcd4640eeb82542af7a7f4c28bfd382d9dbc8bbffde0db3f3d3bee2fd2ff6298297a5e318dc4db205884834900286e76c2db9fcd40ab8bc664d33f9c8f008d276c6f8538fae071e8efca164b75db93b4fe09a33aa0fa242ceb49dd9db4a92e21c2fe59febf0fd28ad3c92b0ad12484cd19ca06e6bd4d73571b0d94ee8a31e82be2860c4cbc55217c238a27fac302f26d69251649fe3b3ea7c898b90819e972181391e01ad0d778ef18d8ca2b3cedabf19d05e7a9d3d328e598e660337e221b361f4d177b449b585a1bcbb7413a9f61f78a18566a9682e801936ed897a2815cd0b8722743763b0a50315a395e40a94a04bd0e64b8b8fa175229a8a513f0dd50c32f67558eed95ba280d36963ae0ceeccce3ab7636f9a58fa8de3cb5341c3d1466bd0e8c10dbe8d89958a32f761d34e6c13d74bee29888eaf2928445c919ce79efd470cbb9a867a5e2d2c4e1a7d2ef5ccd14fb4f08be5f34cc066f55dc73246293e4f5f2c0bb2ba70900ad09954f83d7cc9a1c569301129cf80b7',
        y: '310d0d5cacd1eb48ab80d40b508894312d13529e3c3695751854301cf5db27db0',
        u: 'f806b8dce58e5a470a9d312c9740e59ebe5ab8de358d695b8e924e01cb8edea0',
        chaincode: '944325645103f86e37b161aa62554468003988b0af30ec53e5f88d516e81af34',
      },
    },
  },
  bitgoKeyShare: {
    pShare: {
      i: 3,
      l: 'e2b8d46d5a34c51fe2c202b9a263e5828a4a6d252ef383c86013fa00a410f4369b077253a0a02f6081e7876948db91b617eddb870f60efcbdb8cc6694d5d05b64575d880d79707f6064677e659931f2ef06835d22a9b9ad1d20a18401e3744780613146bc92f971fffbc5c3dad308b40932fb14c5899093892fb91e380b92099a465a3f65ef64414ead9639ad1f28d92a26a97a451b11a673dc62bfd582ef35f0aa1c2a8b92e6e732dd2a4617ef7de439a8272211ab90f5a56c268fa73b19973805ef2dce6915e3cb6a4d538c0eacfd2d075b370f2ad07b820a1a18ca1aecadf5befb38ef14a1ed90d5eed272a986ec710f66ab51cea24fc744cdd73f638093635b8a556cf62d86886d3f001ec2881d3593110501d70a067ffc9093928aeae4531bff5def1074a51498f086ecd75a1f1a0cdeb424536b50c2a4a62d0725fa9ce00b4652737c5b1f9166dbe0dce8b737bab95fb0fdac4cd1f61580200218254cf84cae905507cb1978653b55767688cd8cd6009ec9e291352dff8ab6acb407000',
      m: 'a5e806d0dc498ff499dd861749dc442868c173d9aa7353b8436f13c8f801500ac080dc00eb687dde96ed171fce307406359df1db1a576c4eb57ac5d439f2e21cfa02ad20a0f0f735e32305189e49afb23cda482cac46f536eb0ba5f7db0afbf0a13e51a31fa5fe7b4530b9f4fa63c704a67c8bc1964c6ed3272acd4bd041d86c8e6c0c90e4c4a6d68ac5666a562f8506a5a54220ae7fca9889705895a7eef6792d0c16e473e69fbad3ea6c1bdf1de10c03528d5677c43182b8ebd7d183f87b887db6928f7fd17e30f285d3e6b0d6d43c5823e824949a4c3dbae61941f7eb419c3f2a5841507fa94d3a836a8d86aff5b8bd82a8ec1ca9b7d095fbb574b318ace9891b12ae23edef233184c8e2df5e4a8c63f57f7492c0ba451fc5a84f86adaaba7db1b684374082d48c109141b4872e74b6608291419e7a808085eb0d1202cd844bca35debe0340c127ea2d3b2257149f5167448833cb1dd56039d565293f5cb2345e5a678032937d4115daf6dc5b4b05bfc463203878edc13eaeb09111cd4383',
      n: 'e2b8d46d5a34c51fe2c202b9a263e5828a4a6d252ef383c86013fa00a410f4369b077253a0a02f6081e7876948db91b617eddb870f60efcbdb8cc6694d5d05b64575d880d79707f6064677e659931f2ef06835d22a9b9ad1d20a18401e3744780613146bc92f971fffbc5c3dad308b40932fb14c5899093892fb91e380b92099a465a3f65ef64414ead9639ad1f28d92a26a97a451b11a673dc62bfd582ef35f0aa1c2a8b92e6e732dd2a4617ef7de439a8272211ab90f5a56c268fa73b19975c125a62abffc5c7a549bd41d84fb06255782ee83bfbabbbd272e21f2667ce9025a97a494092438b5421deb3071895f56f41f0dc20b62786450c8c19cdb6f2d799d7da2a8741b1a4a63f36a6ee4259af887e316fd509572fda2ff593ad8667a08f764bba440270131733197b012558a81f7e95cae51204795439994915383dd8d974d99bbd8fc7ac8d30adc5265343f8f9156333132115b818b9b371593b39066680fc317b720d31df0367be491f1c00db165811a75498c33cff9e613940ac861',
      y: '215135776a01f696cfc425acb2b70e4ba23194756dc81eb718eb913b4f7a83340',
      u: '30b9a6812eb7c8924c1809f3419c50c21f9e878f8559855e88bd237a72e7e01',
      chaincode: 'b84064491ca521b367b70a70b9526bc894e8c5db1ae170009f34588b1f94c48d',
    },
    nShares: {
      1: {
        i: 1,
        j: 3,
        n: 'e2b8d46d5a34c51fe2c202b9a263e5828a4a6d252ef383c86013fa00a410f4369b077253a0a02f6081e7876948db91b617eddb870f60efcbdb8cc6694d5d05b64575d880d79707f6064677e659931f2ef06835d22a9b9ad1d20a18401e3744780613146bc92f971fffbc5c3dad308b40932fb14c5899093892fb91e380b92099a465a3f65ef64414ead9639ad1f28d92a26a97a451b11a673dc62bfd582ef35f0aa1c2a8b92e6e732dd2a4617ef7de439a8272211ab90f5a56c268fa73b19975c125a62abffc5c7a549bd41d84fb06255782ee83bfbabbbd272e21f2667ce9025a97a494092438b5421deb3071895f56f41f0dc20b62786450c8c19cdb6f2d799d7da2a8741b1a4a63f36a6ee4259af887e316fd509572fda2ff593ad8667a08f764bba440270131733197b012558a81f7e95cae51204795439994915383dd8d974d99bbd8fc7ac8d30adc5265343f8f9156333132115b818b9b371593b39066680fc317b720d31df0367be491f1c00db165811a75498c33cff9e613940ac861',
        y: '215135776a01f696cfc425acb2b70e4ba23194756dc81eb718eb913b4f7a83340',
        u: '8223e757632c2c8dba321ef5645db634fb5e9cfbe901baa318746ca0f31f972',
        chaincode: 'b84064491ca521b367b70a70b9526bc894e8c5db1ae170009f34588b1f94c48d',
      },
      2: {
        i: 2,
        j: 3,
        n: 'e2b8d46d5a34c51fe2c202b9a263e5828a4a6d252ef383c86013fa00a410f4369b077253a0a02f6081e7876948db91b617eddb870f60efcbdb8cc6694d5d05b64575d880d79707f6064677e659931f2ef06835d22a9b9ad1d20a18401e3744780613146bc92f971fffbc5c3dad308b40932fb14c5899093892fb91e380b92099a465a3f65ef64414ead9639ad1f28d92a26a97a451b11a673dc62bfd582ef35f0aa1c2a8b92e6e732dd2a4617ef7de439a8272211ab90f5a56c268fa73b19975c125a62abffc5c7a549bd41d84fb06255782ee83bfbabbbd272e21f2667ce9025a97a494092438b5421deb3071895f56f41f0dc20b62786450c8c19cdb6f2d799d7da2a8741b1a4a63f36a6ee4259af887e316fd509572fda2ff593ad8667a08f764bba440270131733197b012558a81f7e95cae51204795439994915383dd8d974d99bbd8fc7ac8d30adc5265343f8f9156333132115b818b9b371593b39066680fc317b720d31df0367be491f1c00db165811a75498c33cff9e613940ac861',
        y: '215135776a01f696cfc425acb2b70e4ba23194756dc81eb718eb913b4f7a83340',
        u: '8596ec6ec48f1fa900325147452fd037162f5797b3172a1decf2bbc7434b5c5a',
        chaincode: 'b84064491ca521b367b70a70b9526bc894e8c5db1ae170009f34588b1f94c48d',
      },
    },
  },
};

export const otherKeyShares: ECDSA.KeyShare[] = [
  {
    pShare: {
      i: 2,
      l: 'c5f91eb7334072f5e8a76134731f061c9eb16df20f193458ca8eb5187d0fd6542735ea7d58014eb25f18cd04a1559290c0d49aacda3283ee98f1489cd759f6e1f6462e0e61e2397e8a1005f733d9a7d1380cf4a70cd5a86aa877daa34c47d8634d3550c378b7e42ed9a74e71f1555c155bb573757760da3f11a8a46b70e56dc93e86d360d0836e72570ad746919a8ef6e65e772b8d188c77e1c8da2ea8373d55ae4c6015183e514c4923cbd87e5d1d57b01707866631a7e6341d6025b35b4754d3329988c62ef7a215c6b1bed93a31f763ecf70137e26dca508886305a77a92758671e2a22de35df51416d592e6650db4c843eae913477951ca1b6d3c840562602c68cba5d80feca4c1abac63e65208bddb2397f19144edceb12c694fc75e02451f460e21e5d79903b8180242cbe2b2cea610b5bfc6865520de933e1f0341499cd6fddddbe0adf154f51ae3a46df1cad304ebc4149347136b567d5c83d6aa510529ceaef16003119201010ff73b66894ceedf283c29f138286cb4263456a592c',
      m: '6f21b772e31b4f63e952b1a917e8b3fb25d2154cdeef49963e62c0394434efec0eb7147cff3bc45670973a234f928d3440555e6f41e24619406feb5e19a497e4e796cb2d3f5deb88733077cf045ff566be832106bb759faa2258d17e1330dd0a0beaf68fb24bd4f77bf934174c87448237fe7bd5684d7b55025d33d7a0455d7db63396cc330c2dd64aae657a7c78c1e955523de53da2105ce2a7fcc603afce0eb1bbee01bf9cdfb68982b262b7f8117da3a3f6baac174532ea8a87f763619f7d50acf4b47dda37c1fa4d8f13015519b01df4a83d520b7c51585f65a0ba6ac695a62d17350b8ce2439cb9ecdebfcd740c7d33265685cba29e7ad7974b0b5e4b1558f33bcbece0010f22c0a0c48bd7614c12c49d98fe05109b0afe7e88693f0b3625b7a4c79b227b28fbe4077060ae6e99de3ed20155c28946ab9e37b99e43cff08703f3082b4d2982c42bc1bee67a209174dc8c9e24cd8c6b0d56643d244e25f5a463b86fba919da07b618ee50dc04c890d3ea1a185585b45fc965c3a32b7444a',
      n: 'c5f91eb7334072f5e8a76134731f061c9eb16df20f193458ca8eb5187d0fd6542735ea7d58014eb25f18cd04a1559290c0d49aacda3283ee98f1489cd759f6e1f6462e0e61e2397e8a1005f733d9a7d1380cf4a70cd5a86aa877daa34c47d8634d3550c378b7e42ed9a74e71f1555c155bb573757760da3f11a8a46b70e56dc93e86d360d0836e72570ad746919a8ef6e65e772b8d188c77e1c8da2ea8373d55ae4c6015183e514c4923cbd87e5d1d57b01707866631a7e6341d6025b35b4756b786ad7dab897e58337c58d03d98d84dec4bd6dfb74927d28c2ba29f6b838eb033f3cea8e3900672ca679bbf6f12000ea25c31675f2196c1a1b06c1f9a04b41c488ecc0bf858fa26b614059593b73da9ce05fd474c71c6222adc4b85eb0eeed30d15bd59ce632fc5c74e9811ec3e735bb17681c51b7b8d1f10368fee892a06e4093d11bb448d4821a5313027db3f36c259050d3e4ddf367b6d5843d492915eab6f7e10c64a0f0ebdfc210608d003c949b4c0f8e2e8f65f0fcf860d3175c6dc35',
      y: '302b576b71eec6166ff1d5a27d60722890f87d4075ae7be9e49cc37aa3ee46904',
      u: '34a7e7d297c8f225ff182beedad0605b1666a489dd8004cdea126bd23d27d5c7',
      chaincode: '1b7d4fa833633a16e017a27fbfceee377e14e75305115617482aa0fe948ec5a6',
    },
    nShares: {
      1: {
        i: 1,
        j: 2,
        n: 'c5f91eb7334072f5e8a76134731f061c9eb16df20f193458ca8eb5187d0fd6542735ea7d58014eb25f18cd04a1559290c0d49aacda3283ee98f1489cd759f6e1f6462e0e61e2397e8a1005f733d9a7d1380cf4a70cd5a86aa877daa34c47d8634d3550c378b7e42ed9a74e71f1555c155bb573757760da3f11a8a46b70e56dc93e86d360d0836e72570ad746919a8ef6e65e772b8d188c77e1c8da2ea8373d55ae4c6015183e514c4923cbd87e5d1d57b01707866631a7e6341d6025b35b4756b786ad7dab897e58337c58d03d98d84dec4bd6dfb74927d28c2ba29f6b838eb033f3cea8e3900672ca679bbf6f12000ea25c31675f2196c1a1b06c1f9a04b41c488ecc0bf858fa26b614059593b73da9ce05fd474c71c6222adc4b85eb0eeed30d15bd59ce632fc5c74e9811ec3e735bb17681c51b7b8d1f10368fee892a06e4093d11bb448d4821a5313027db3f36c259050d3e4ddf367b6d5843d492915eab6f7e10c64a0f0ebdfc210608d003c949b4c0f8e2e8f65f0fcf860d3175c6dc35',
        y: '302b576b71eec6166ff1d5a27d60722890f87d4075ae7be9e49cc37aa3ee46904',
        u: 'd9d0c908040465ac6db8a13dca96e6684bbffe5dd5e55679decea2b479f514d8',
        chaincode: '1b7d4fa833633a16e017a27fbfceee377e14e75305115617482aa0fe948ec5a6',
      },
      3: {
        i: 3,
        j: 2,
        n: 'c5f91eb7334072f5e8a76134731f061c9eb16df20f193458ca8eb5187d0fd6542735ea7d58014eb25f18cd04a1559290c0d49aacda3283ee98f1489cd759f6e1f6462e0e61e2397e8a1005f733d9a7d1380cf4a70cd5a86aa877daa34c47d8634d3550c378b7e42ed9a74e71f1555c155bb573757760da3f11a8a46b70e56dc93e86d360d0836e72570ad746919a8ef6e65e772b8d188c77e1c8da2ea8373d55ae4c6015183e514c4923cbd87e5d1d57b01707866631a7e6341d6025b35b4756b786ad7dab897e58337c58d03d98d84dec4bd6dfb74927d28c2ba29f6b838eb033f3cea8e3900672ca679bbf6f12000ea25c31675f2196c1a1b06c1f9a04b41c488ecc0bf858fa26b614059593b73da9ce05fd474c71c6222adc4b85eb0eeed30d15bd59ce632fc5c74e9811ec3e735bb17681c51b7b8d1f10368fee892a06e4093d11bb448d4821a5313027db3f36c259050d3e4ddf367b6d5843d492915eab6f7e10c64a0f0ebdfc210608d003c949b4c0f8e2e8f65f0fcf860d3175c6dc35',
        y: '302b576b71eec6166ff1d5a27d60722890f87d4075ae7be9e49cc37aa3ee46904',
        u: '8f7f069d2b8d7e9f9077b69feb09da4c9bbc279c9463535db528937cd090d7f7',
        chaincode: '1b7d4fa833633a16e017a27fbfceee377e14e75305115617482aa0fe948ec5a6',
      },
    },
  },
  {
    pShare: {
      i: 1,
      l: 'a3dce22946da012f1975bca5e2e3fae5f005b5477254d664f2f3664b78baddf8a0ecc54e4b4b7193d733ae3e89eefbe60725c0cf591528e0e62abe341cbc5a72df03fcd21d80811e8c2fe583a108aa939a27b06b76ebbef0c5a8942662e758722ff5a5d29c51f2b68be463aa227312c6cd34b37698fff9c01b8f0a7441c8b7cb2b9b1d037907030ac331dc9e07aa39b2e36e0ed4c5348027883441a38578b63922975f98a3657808b0cf61516680d58ff762f210290799f0d133fd10d6f0daf3af2e8d1e6538dc933e0fc4471086b792a77b3dc5dad75406740f82add58c4f871f0da34d930d4f7d5c6959f5ef91d404fb8641bc1a16ef863eeb7f841ce31820c22b8af46cea95f7a96a4058442af83513d8588728125f451330f29f1c93d63aa3d18b6380932fd7d101bf096088ab9f06f3e6196570374dae8b0aeb2a0103c3b011c20d791d7c31212e731493db135e9e6b89bacf5c330632d0654c9845dca90bbc018ac5332f17a4673eae9a22fb9fec82902063307bc0d0506ec934fee22c',
      m: '2acfe090cc5a67bf02f3b794f6385f666e19ca11f36bb7f809f208d7467ef986ae6c8935ee09ead3aae8621e63dee157efe6c6cbf9321367a8d6fe67b420e30116fd8f3bceaf7fa8cbbcbc44413c5d7724a97882b35070d11af4909bd0f9c2987c1516c90fbf1fc911c1fbafc4a629df69993cce4ed63e464c253153d6f8d7de12027a9942a66c371dcba2dac8becec47ca48ced2edc7f422bab4407ef53d4cf20fe8f74a885ad75ceaf5c1c71dcff494cdbc38f496931c10a2536e1c6017991f204dbc757b5a38f537966120385f68906aac3ed61d74d00a33168f58c39bf986fc683c1856e904d969578f8e63e13457afc0b999677b00f44a60e07f7e34710e20dc4f8e7eac121eb88f41f4e0a7886fffd66f45cb6dfe686ff1274308b1222a31b0ffeec04c3235bc758cacaf140c366affb0339886c87074169e3f15a369a619ac7d958e5a8bfc3954f7ee20985c64fc84b1ea9ab6d4caa4c0731e943379130be54881b6ff59a5f0fc9d2bd09b49ac59050b67047908a0b8cb2a7c975a70a',
      n: 'a3dce22946da012f1975bca5e2e3fae5f005b5477254d664f2f3664b78baddf8a0ecc54e4b4b7193d733ae3e89eefbe60725c0cf591528e0e62abe341cbc5a72df03fcd21d80811e8c2fe583a108aa939a27b06b76ebbef0c5a8942662e758722ff5a5d29c51f2b68be463aa227312c6cd34b37698fff9c01b8f0a7441c8b7cb2b9b1d037907030ac331dc9e07aa39b2e36e0ed4c5348027883441a38578b63922975f98a3657808b0cf61516680d58ff762f210290799f0d133fd10d6f0daf557ba82c2c5089501d38296da701a398dcaf08643115d0e234edcdfa04aa7d54517bd7fec327615354b9a3c7cb0b105a28a144c3522068e460921123f637d1957b129449cedf6a2f24faa53f7f4cb9f51cec234af88a841bdee90e69f3dc4a3c7cc0ea8bc253bc5b603cee423b40d574dfaffe96e60f441e003ad0bfbfaab52bfae620bea875e04c6a9ad6a0f96c479af42470b84b061244b8d10a7cb676a153fac94164d9ad79e63858208a8210dbe8f7eee1a8372d284c26668e440655d8475',
      y: '29080a390aedba543e81aaf018fa5b7ee964d2774f92843fa3f08227aba7eb21c',
      u: 'a20c4dc54334c0d2a8657924b1f1d8ee4b8bd8d89e42c3190583c5b035e8e175',
      chaincode: '258cff2edb29cc655d99b0593c556db1438d1b153f78bf4da24e45d1b065212c',
    },
    nShares: {
      2: {
        i: 2,
        j: 1,
        n: 'a3dce22946da012f1975bca5e2e3fae5f005b5477254d664f2f3664b78baddf8a0ecc54e4b4b7193d733ae3e89eefbe60725c0cf591528e0e62abe341cbc5a72df03fcd21d80811e8c2fe583a108aa939a27b06b76ebbef0c5a8942662e758722ff5a5d29c51f2b68be463aa227312c6cd34b37698fff9c01b8f0a7441c8b7cb2b9b1d037907030ac331dc9e07aa39b2e36e0ed4c5348027883441a38578b63922975f98a3657808b0cf61516680d58ff762f210290799f0d133fd10d6f0daf557ba82c2c5089501d38296da701a398dcaf08643115d0e234edcdfa04aa7d54517bd7fec327615354b9a3c7cb0b105a28a144c3522068e460921123f637d1957b129449cedf6a2f24faa53f7f4cb9f51cec234af88a841bdee90e69f3dc4a3c7cc0ea8bc253bc5b603cee423b40d574dfaffe96e60f441e003ad0bfbfaab52bfae620bea875e04c6a9ad6a0f96c479af42470b84b061244b8d10a7cb676a153fac94164d9ad79e63858208a8210dbe8f7eee1a8372d284c26668e440655d8475',
        y: '29080a390aedba543e81aaf018fa5b7ee964d2774f92843fa3f08227aba7eb21c',
        u: '114083307d4416939368413233330a97bb361883d618b6f7dc32fa1e344aa984',
        chaincode: '258cff2edb29cc655d99b0593c556db1438d1b153f78bf4da24e45d1b065212c',
      },
      3: {
        i: 3,
        j: 1,
        n: 'a3dce22946da012f1975bca5e2e3fae5f005b5477254d664f2f3664b78baddf8a0ecc54e4b4b7193d733ae3e89eefbe60725c0cf591528e0e62abe341cbc5a72df03fcd21d80811e8c2fe583a108aa939a27b06b76ebbef0c5a8942662e758722ff5a5d29c51f2b68be463aa227312c6cd34b37698fff9c01b8f0a7441c8b7cb2b9b1d037907030ac331dc9e07aa39b2e36e0ed4c5348027883441a38578b63922975f98a3657808b0cf61516680d58ff762f210290799f0d133fd10d6f0daf557ba82c2c5089501d38296da701a398dcaf08643115d0e234edcdfa04aa7d54517bd7fec327615354b9a3c7cb0b105a28a144c3522068e460921123f637d1957b129449cedf6a2f24faa53f7f4cb9f51cec234af88a841bdee90e69f3dc4a3c7cc0ea8bc253bc5b603cee423b40d574dfaffe96e60f441e003ad0bfbfaab52bfae620bea875e04c6a9ad6a0f96c479af42470b84b061244b8d10a7cb676a153fac94164d9ad79e63858208a8210dbe8f7eee1a8372d284c26668e440655d8475',
        y: '29080a390aedba543e81aaf018fa5b7ee964d2774f92843fa3f08227aba7eb21c',
        u: '8074b89bb7536c547e6b093fb4743c3fe58f3515bd374b1272b48d1902e2b2d4',
        chaincode: '258cff2edb29cc655d99b0593c556db1438d1b153f78bf4da24e45d1b065212c',
      },
    },
  },
  {
    pShare: {
      i: 1,
      l: 'ffcce9a1fc7eeac584d10af86bc155fde279c30b413cac32adbabf78911465045c8cf94b5515dba347bfd4ab86d4cd956e3206ba0276cd0486c70307ebfdcc95ee3250766fb887c63fbbb4fe69eef313c0cbb577cb8d2a10f6d71f7d38a87c60e61a6453d53e3afa3982fbb047a0b805646fc8d7858b0a3d6906962e7d944d710f53069ece57c8f6c00e55af21863b43ffef0e9b4a4a684c366b8da182ee50d5966a4c1ab0eeb2c2a579776e52fa6e194986d106a5a6a236efbcf3c9f33039884bdf8e2c8ad5acfd8cb608f70887ea704d81cfdeb15071c7133210081c6757ffe3579a441e7d856fc581912e80d95bc6d6251be9ac4231341aa1365b88a48fbe73a7ef7e456981e14885bee17afcdcdf7af294d9653a3d6271ab5c7e486c66f74638acacafa287b883a36d1b0c5a61393f8102237372295b0413976c1a03d146d89d84555f5e95a1b51d1d4de0c1c86a99354c0860ca98cd26baacade92f312662a3239b5944c18c9f40554e63fe389c6994136c73d9488d5f5d55f76945b34c',
      m: '3606559759038fcd8f0b24658a2ec4e63244d9554ea73cd422275f17245e9eed1bb01ed02628babfec441cfc04ee28606d01b0220fafc07fd1ac7da0aacc23f0ce00e8b327fbb1cdba9c740ed6cbd2565082b99a21830e80dc5868b607d3592d397248fe8e3c0c3e4d3c34c00c8a131eaf4d472132f9258cc7491c36fae5a877f468c14d875bbc1cde1d37d8cd0d165b0d4952d7a10c93d815fb6008f1c8ef52473b6c910c1d4d3c820601ebcdcc25860a8238f8cb9dd8fb6fca634a22bb7936694343d05690efd10ff5794f6393829deb9488dbdd05b5b1f82c12f0cf1659f47571a327ea4da364e6662cd2fe13f1ea0b26c0a0995b6b7c6637d45cfb943e2d5f31cc4fc23b6f1ef08271f905533e358c55fe94fcb29c446ed66b2a6d7c1efe5d725e2dd0b531525f0bd8afdbc8bda3e363da49a21254011ece3884ca2d56d0bb863b72dcd09843a65dcc4bdebd415dc4d716832ac66efc0d1d4ff78dad34e8428983035fcf827db10062fe21bd6f32ed06ccea1067b23fb4c56a2bde498b00',
      n: 'ffcce9a1fc7eeac584d10af86bc155fde279c30b413cac32adbabf78911465045c8cf94b5515dba347bfd4ab86d4cd956e3206ba0276cd0486c70307ebfdcc95ee3250766fb887c63fbbb4fe69eef313c0cbb577cb8d2a10f6d71f7d38a87c60e61a6453d53e3afa3982fbb047a0b805646fc8d7858b0a3d6906962e7d944d710f53069ece57c8f6c00e55af21863b43ffef0e9b4a4a684c366b8da182ee50d5966a4c1ab0eeb2c2a579776e52fa6e194986d106a5a6a236efbcf3c9f330398a679486af98bc39d238e90c66bc858d2e08a6e8ac21fc6f61a35fc8938fb1856418b0f3954456cb014675f8cb3fea7cc340c037b0e2e7c92fa5952275129feb682c6d1ccc0b6a357ed8c1d70562b3cccf34058d1726ea6efec66d04e10a73f5fdea4ef0ca62833b36600f9a48dee7a72e7eaec96a0604f1fec2029d6c5b1bd4c7750f36f93134e64cc06663021e5839c7f51b45a55bae7295209a934c2d804f6632ff6d4201a2449fa7410ee29865ee0f88913d63dcea01d80aab35f9e9475da5',
      y: '3cc0f46c0671a7823edd13d3493f9ab9526999025b421c0f12095e10984dbfad3',
      u: '1a940d6b8516bc7994a86e34b3dd735bc54b11b798a272f7f3a4dfaac9700ff9',
      chaincode: '05a62273863b3538e195f569aa44bb4730313655c75e7e3f39a477c492d160b9',
    },
    nShares: {
      2: {
        i: 2,
        j: 1,
        n: 'ffcce9a1fc7eeac584d10af86bc155fde279c30b413cac32adbabf78911465045c8cf94b5515dba347bfd4ab86d4cd956e3206ba0276cd0486c70307ebfdcc95ee3250766fb887c63fbbb4fe69eef313c0cbb577cb8d2a10f6d71f7d38a87c60e61a6453d53e3afa3982fbb047a0b805646fc8d7858b0a3d6906962e7d944d710f53069ece57c8f6c00e55af21863b43ffef0e9b4a4a684c366b8da182ee50d5966a4c1ab0eeb2c2a579776e52fa6e194986d106a5a6a236efbcf3c9f330398a679486af98bc39d238e90c66bc858d2e08a6e8ac21fc6f61a35fc8938fb1856418b0f3954456cb014675f8cb3fea7cc340c037b0e2e7c92fa5952275129feb682c6d1ccc0b6a357ed8c1d70562b3cccf34058d1726ea6efec66d04e10a73f5fdea4ef0ca62833b36600f9a48dee7a72e7eaec96a0604f1fec2029d6c5b1bd4c7750f36f93134e64cc06663021e5839c7f51b45a55bae7295209a934c2d804f6632ff6d4201a2449fa7410ee29865ee0f88913d63dcea01d80aab35f9e9475da5',
        y: '3cc0f46c0671a7823edd13d3493f9ab9526999025b421c0f12095e10984dbfad3',
        u: '7db54a0676ef8f129dc0642b96f141992c302ab97e1e0dfceaf88d5771bc1a01',
        chaincode: '05a62273863b3538e195f569aa44bb4730313655c75e7e3f39a477c492d160b9',
      },
      3: {
        i: 3,
        j: 1,
        n: 'ffcce9a1fc7eeac584d10af86bc155fde279c30b413cac32adbabf78911465045c8cf94b5515dba347bfd4ab86d4cd956e3206ba0276cd0486c70307ebfdcc95ee3250766fb887c63fbbb4fe69eef313c0cbb577cb8d2a10f6d71f7d38a87c60e61a6453d53e3afa3982fbb047a0b805646fc8d7858b0a3d6906962e7d944d710f53069ece57c8f6c00e55af21863b43ffef0e9b4a4a684c366b8da182ee50d5966a4c1ab0eeb2c2a579776e52fa6e194986d106a5a6a236efbcf3c9f330398a679486af98bc39d238e90c66bc858d2e08a6e8ac21fc6f61a35fc8938fb1856418b0f3954456cb014675f8cb3fea7cc340c037b0e2e7c92fa5952275129feb682c6d1ccc0b6a357ed8c1d70562b3cccf34058d1726ea6efec66d04e10a73f5fdea4ef0ca62833b36600f9a48dee7a72e7eaec96a0604f1fec2029d6c5b1bd4c7750f36f93134e64cc06663021e5839c7f51b45a55bae7295209a934c2d804f6632ff6d4201a2449fa7410ee29865ee0f88913d63dcea01d80aab35f9e9475da5',
        y: '3cc0f46c0671a7823edd13d3493f9ab9526999025b421c0f12095e10984dbfad3',
        u: 'e0d686a168c861aba6d85a227a050fd6931543bb6399a901e24c3b041a082409',
        chaincode: '05a62273863b3538e195f569aa44bb4730313655c75e7e3f39a477c492d160b9',
      },
    },
  },
  {
    pShare: {
      i: 2,
      l: 'bea3bef65b997b6afc7345ae18f36452adbba78729e8e25c3f3642a36f14e26bf24d98010e2936c4db917126b501cfc04a157d634570be2c9943063b35d04ac8a3e5ee14f45a51e207e581806a14685b8e25cbd64effc267841c1360aab5dd8548f7a452d79dd4de8a985e69bf68c644fddefa3cdd0394309812958cb92567953b1a5489ef32c3e881cfda82537d56dbbe0ac54299b6e617c3c3685df36a8401e76e319f7711d6f58a1a0aeb7994653bcc5e2f92d9ffffdd2c661a9a9df8617021bf4bfd8f9e9c9c6d5a303e6e8c156073b513e324e1154ef29b47e3eea505c45dcd8eccea7eebeb9fff4b7e432b41e3713e561a6bbac76375c4b5c13e898efc4b5a9022a7cf9e56631414df6e015021295aae668e79c39ba80814045a1520b0e19b1bf240e0b46ba9ea5e5fd16c14b9b8be57ff0a23009650415cb1233ecc81c8705bc6661d6a21a5f40d11db1c646a0ef98cdeaea0d4179a8e4929983549b67dcf9cbeccb1639e64cf2a1fa5fdf8b962bf0199a4877f94d1c1e853db721410',
      m: '3a10e8f014d4816a109823009bca084b2269c2e169a307fa2f5e7598da6c1a8f94b7a8a688ec4db0eaddf9fecc7a3cdcbcc8a01bf5f0719dff86de28a5411efa5de0d60d0c681bd0dba5b8d4b7890839bae0e4527af5011aed7794e3b245c2781186d7b99550ba28f52da383ed99cbdfa8d6cef25e23244ec08e70471023cb39608b64321f297872fb8ddc6633511ff4e2aa0ec88a8630f73e1a0233d9710043334ddb5f74681b2ce2c3390a58e2e708adb7c6e423ddfcf50be65054af7ecc2c80e6823a976d50b8d534164e9ac7f08bb3fef0adde4b54b497f762c0ffbf485ee5926e1ce72da59b81f002997a50bcb8ce5e23129f12b1e341d5fbf2407875d428b9e20d30b9b6059a52964b7bde5dbcbfdd010926cadde48ce10e087cab49291cb769c5c49447e52011c1ea2bcc6813a22c321223d85214eab8e759879a34ed3ac761d93cc20f3f24e7a6a66633062c0702a09501ebd032476344e4f1f5aeb4d05ee88450a14578280e66733f04f1d99a354fc08ead8e13d4050fff6cbb42ba',
      n: 'bea3bef65b997b6afc7345ae18f36452adbba78729e8e25c3f3642a36f14e26bf24d98010e2936c4db917126b501cfc04a157d634570be2c9943063b35d04ac8a3e5ee14f45a51e207e581806a14685b8e25cbd64effc267841c1360aab5dd8548f7a452d79dd4de8a985e69bf68c644fddefa3cdd0394309812958cb92567953b1a5489ef32c3e881cfda82537d56dbbe0ac54299b6e617c3c3685df36a8401e76e319f7711d6f58a1a0aeb7994653bcc5e2f92d9ffffdd2c661a9a9df861720aeecc315c2d1687849a446a9a678e9ef1d3c9ea800f7cd677655f26ffe69ee953337cc34854a522a2cd17e7bb11218b76bf6b14d7294a8ebe679a01ba5d5d7df3523f3c553566179bf0a6ea9d6661ba2b132dd17770005a809d579c28a03f8d24a82878dc7b750f6817a24f00b38027eede77b814196cecfcaf5901bca72c0aab4af42b68dac85c67111f237f90162db1b5bc03ffb0f77ba02dfec56ab3c1fb434ab14528eb004ca4854c0ec8eb6229be3db02bb2d98f050491b17ab4f80219',
      y: '27ca80dc2440911e7e3ef09fabd7ca78b7f64e7083ff048326660dcdbe72ef842',
      u: '52ab71be01d42fea0070294187c84132f4d1cfa4d6dfab19c0f51e4db889f601',
      chaincode: '6e037a22f0fa826d12ad85134dedb74a64b0dc93900b4931b9f4126ee52b2fcd',
    },
    nShares: {
      1: {
        i: 1,
        j: 2,
        n: 'bea3bef65b997b6afc7345ae18f36452adbba78729e8e25c3f3642a36f14e26bf24d98010e2936c4db917126b501cfc04a157d634570be2c9943063b35d04ac8a3e5ee14f45a51e207e581806a14685b8e25cbd64effc267841c1360aab5dd8548f7a452d79dd4de8a985e69bf68c644fddefa3cdd0394309812958cb92567953b1a5489ef32c3e881cfda82537d56dbbe0ac54299b6e617c3c3685df36a8401e76e319f7711d6f58a1a0aeb7994653bcc5e2f92d9ffffdd2c661a9a9df861720aeecc315c2d1687849a446a9a678e9ef1d3c9ea800f7cd677655f26ffe69ee953337cc34854a522a2cd17e7bb11218b76bf6b14d7294a8ebe679a01ba5d5d7df3523f3c553566179bf0a6ea9d6661ba2b132dd17770005a809d579c28a03f8d24a82878dc7b750f6817a24f00b38027eede77b814196cecfcaf5901bca72c0aab4af42b68dac85c67111f237f90162db1b5bc03ffb0f77ba02dfec56ab3c1fb434ab14528eb004ca4854c0ec8eb6229be3db02bb2d98f050491b17ab4f80219',
        y: '27ca80dc2440911e7e3ef09fabd7ca78b7f64e7083ff048326660dcdbe72ef842',
        u: 'a0ab6f13b4cc8fceb1cb21bb1fa120d30a30f1f5578e44d46854e3a440842f9',
        chaincode: '6e037a22f0fa826d12ad85134dedb74a64b0dc93900b4931b9f4126ee52b2fcd',
      },
      3: {
        i: 3,
        j: 2,
        n: 'bea3bef65b997b6afc7345ae18f36452adbba78729e8e25c3f3642a36f14e26bf24d98010e2936c4db917126b501cfc04a157d634570be2c9943063b35d04ac8a3e5ee14f45a51e207e581806a14685b8e25cbd64effc267841c1360aab5dd8548f7a452d79dd4de8a985e69bf68c644fddefa3cdd0394309812958cb92567953b1a5489ef32c3e881cfda82537d56dbbe0ac54299b6e617c3c3685df36a8401e76e319f7711d6f58a1a0aeb7994653bcc5e2f92d9ffffdd2c661a9a9df861720aeecc315c2d1687849a446a9a678e9ef1d3c9ea800f7cd677655f26ffe69ee953337cc34854a522a2cd17e7bb11218b76bf6b14d7294a8ebe679a01ba5d5d7df3523f3c553566179bf0a6ea9d6661ba2b132dd17770005a809d579c28a03f8d24a82878dc7b750f6817a24f00b38027eede77b814196cecfcaf5901bca72c0aab4af42b68dac85c67111f237f90162db1b5bc03ffb0f77ba02dfec56ab3c1fb434ab14528eb004ca4854c0ec8eb6229be3db02bb2d98f050491b17ab4f80219',
        y: '27ca80dc2440911e7e3ef09fabd7ca78b7f64e7083ff048326660dcdbe72ef842',
        u: '9b4c2c8ac85b96d715c3a0675d967058b900902a584671e63b64ee612d0ba909',
        chaincode: '6e037a22f0fa826d12ad85134dedb74a64b0dc93900b4931b9f4126ee52b2fcd',
      },
    },
  },
];