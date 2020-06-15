const nodeRD = document.getElementById('nrd');
const nrdResult = document.getElementById('nrd-r');
const blockR = document.getElementById('br');
const brResult = document.getElementById('br-r');
const tsakA = document.getElementById('tsaka');
const tsakaResult = document.getElementById('tsaka-r');
const aK = document.getElementById('ak');
const akResult = document.getElementById('ak-r');
const uT = document.getElementById('ut');
const utResult = document.getElementById('ut-r');
const pnL = document.getElementById('pnl');
const pnlResult = document.getElementById('pnl-r');
const mdfY = document.getElementById('mdfy');
const mdfyResult = document.getElementById('mdfy-r');
const mD = document.getElementById('md');
const mdResult = document.getElementById('md-r');
const v = document.getElementById('v');
const vResult = document.getElementById('v-r');
const sT = document.getElementById('st');
const stResult = document.getElementById('st-r');

var in3 = new IN3(
    "https://mainnet.infura.io/v3/c5787339db824d0c8383ce97bff4dbb1"
);
 const myTokenContract = '0x6C095A05764A23156eFD9D603eaDa144a9B1AF33'
    
    nodeRD.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'nodeRegistryData():address').then(block => nrdResult.innerHTML = block.toString())
        .catch(alert)
    })

    blockR.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'blockRegistry():address').then(block => brResult.innerHTML = block.toString())
        .catch(alert)
    })

    tsakA.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'timestampAdminKeyActive():uint').then(block => tsakaResult.innerHTML = block.toString())
        .catch(alert)
    })

    aK.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'adminKey():address').then(block => akResult.innerHTML = block.toString())
        .catch(alert)
    })

     uT.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'updateTimeout():uint').then(block => utResult.innerHTML = block.toString())
        .catch(alert)
    })

     pnL.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'pendingNewLogic():address').then(block => pnlResult.innerHTML = block.toString())
        .catch(alert)
    })

     mdfY.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'maxDepositFirstYear():uint').then(block => mdfyResult.innerHTML = block.toString())
        .catch(alert)
    })

      mD.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'minDeposit():uint').then(block => mdResult.innerHTML = block.toString())
        .catch(alert)
    })

     v.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'VERSION():uint').then(block => vResult.innerHTML = block.toString())
        .catch(alert)
    })

     sT.addEventListener('click', (e) => {
      e.preventDefault();
        in3.eth.callFn(myTokenContract, 'supportedToken():address').then(block => stResult.innerHTML = block.toString())
        .catch(alert)
    })



    
