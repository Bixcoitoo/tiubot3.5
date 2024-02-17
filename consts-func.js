
const { 
'default': makeWASocket,
downloadContentFromMessage, 
fetchLatestBaileysVersion, 
useMultiFileAuthState, 
makeInMemoryStore, 
DisconnectReason,
WAGroupMetadata,
relayWAMessage,	
MediaPathMap, 
mentionedJid, 
processTime,	
MediaType, 
Browser, 
MessageType, 
Presence, 
Mimetype, 
Browsers, 
delay, 
MessageRetryMap
} = require('@whiskeysockets/baileys');

// MÓDULOS ABAIXO.. 

const { Boom }  = require('@hapi/boom');

const axios = require('axios');

const fs = require('fs-extra');

const cheerio = require('cheerio');

const crypto = require('crypto');

const util = require('util');

const P = require('pino');

const NodeCache = require("node-cache");

const linkfy = require('linkifyjs');

const request = require('request');

const ms = require('ms');

const ffmpeg = require('fluent-ffmpeg');

const fetch = require('node-fetch');

const qrterminal = require('qrcode-terminal');

const { exec, spawn, execSync } = require('child_process');

const moment = require('moment-timezone');

const colors = require("colors");

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

// FUNÇÕES ABAIXO... 

const webp_mp4 = require("./armor/js/webp_mp4.js");

const { sendVideoAsSticker, sendImageAsSticker } = require('./armor/sticker/rename.js');

const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./armor/sticker/rename2.js');

const { addLimit, getLimit } = require('./armor/js/limit.js');

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");

const { validmove, setGame } = require('./armor/tictactoe');

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./armor/js/addcmd.js');

const { palavrasANA } = require('./armor/jogo/jogos.js');

const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('./armor/funcoes/functions.js'); // FUNÇÕES NESCESSARIAS PRA FUNFAR ALGUMAS COISAS

const { addVote, delVote } = require('./armor/js/vote');

// JSON FUNÇÕES ABAIXO CONSTS >

const voting = JSON.parse(fs.readFileSync('./armor/funcoes/voting.json'));

const sotoy = JSON.parse(fs.readFileSync('./armor/funcoes/sotoy.json'));

const rg_aluguel = JSON.parse(fs.readFileSync("./DADOS/rg_aluguel.json"));

const countMessage = JSON.parse(fs.readFileSync('./DADOS/countmsg.json'));

const comandos = JSON.parse(fs.readFileSync('./DADOS/comandos.json'));

const daily = JSON.parse(fs.readFileSync('./datab/usuarios/diario.json'));

const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));

const premium = JSON.parse(fs.readFileSync('./DADOS/premium.json'));

const ban = JSON.parse(fs.readFileSync('./datab/usuarios/banned.json'));

const limitefll = JSON.parse(fs.readFileSync('./datab/usuarios/flood.json'));

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./datab/usuarios/joguinhodavelha2.json'));

const patentes = JSON.parse(fs.readFileSync("./DADOS/patentes.json"));

const antispam = JSON.parse(fs.readFileSync('./dono/media/antispam.json'));

const rggold = JSON.parse(fs.readFileSync('./armor/funcoes/golds.json'));

const anotar = JSON.parse(fs.readFileSync("./func/tabela/anotar.json"));

const setting = JSON.parse(fs.readFileSync('./DADOS/settings.json'));

const logoslink = JSON.parse(fs.readFileSync('./DADOS/logos.json'));

const black_ = JSON.parse(fs.readFileSync("./datab/grupos/AVISOS.json"));

//\\

// JS DE MENUS / INFORMAÇÕES DE UTILIZAR \

const { menu, adms, menudono, menulogos, menuprem, brincadeiras, efeitos, alteradores, anotacao, infoaluguel, infotransmitir } = require('./dono/menus/menus.js');

const { infocontador } = require('./armor/js/infocontador.js');

const { infobemvindo } = require('./armor/js/infobv.js');

const { infolistanegra } = require('./armor/js/infolistanegra.js');

const { infopalavrao } = require('./armor/js/infopalavrao.js');

const { infobancarac } = require('./armor/js/infobancarac.js');

const { infodono } = require('./dono/menus/infodono.js');

const { gitdobot } = require('./dono/gitdobot.js');

const { configbot } = require('./dono/menus/configurar.js');

const { hospedar } = require('./dono/menus/hospedar-heroku.js');

const { cmd_termux } = require('./dono/menus/comandos-termux.js');

const { destrava, destrava2 } = require('./armor/funcoes/destrava.js');

const { tabela } = require('./armor/js/tabela');

const { conselhob } = require('./armor/js/conselhob.js');

const { palavrasc } = require('./armor/js/conselhos.js');

//\\

// DELETAR ARQUIVO..
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// FACILITADOR PARA USO DE BOTÕES...
if(!nescessario.botoes_) {
var EnvBotao = async (id, MR, conn, text1, desc1, X) => {
if(X.split("|")[1] != "0") {
conn.sendMessage(id, {image: {url: X.split("|")[1]}, caption: text1, mentions: [MR]})} else {conn.sendMessage(id, {text: text1, mentions: [MR]})}}
} else {
var EnvBotao = async(id, MR, conn, text1, desc1, X, TXT = [], vr) => {
var DMN_ = X.split("|")[0].charAt(0);
var QNT_B = DMN_ == "1" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}] : DMN_ == "2" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}] : DMN_ == "3" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}, {buttonId: TXT[4], buttonText: {displayText: TXT[5]}, type: 1}]: "";
if(X.split("|")[1] == "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
text: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
image: {url: X.split("|")[1]},
caption: text1, footer: desc1, buttons: QNT_B, 
headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && X.split("|")[0].includes("v")) {
var buttonMessage = {
video: {url: X.split("|")[1]},
caption: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [ME]}}
conn.sendMessage(id, buttonMessage, {quoted: vr}).catch(e => {
return console.log("Erro no botão, Tente novamente ou avalie o que pode está errando.. "+e);
})}}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`;
}

// FUNÇÃO DO BAILES PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType);

let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (conn, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
conn.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const RSM_FUNC = async(conn, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case "02:00:00": case "04:00:00":
case "07:00:00": case "10:00:00":  
case "13:00:00": case "15:00:00":
case "18:00:00": case "22:00:00":
exec("cd DADOS/ALEATORY-QR && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./iniciar.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
if(upsert?.messages == undefined) return
if(JSON.stringify(rg_aluguel).includes(upsert?.messages[0]?.key?.remoteJid)) {
dat_rg = moment.tz('America/Sao_Paulo').format('DD/MM');
for (var i of rg_aluguel) {
var rg_alg_ofc = i;
}

if(dat_rg == rg_alg_ofc.data.split("/")[0]-1+"/"+rg_alg_ofc.data.split("/")[1]) {
rg_alg_ofc.cobrou = false;
fs.writeFileSync("./DADOS/rg_aluguel.json", JSON.stringify(rg_aluguel));
}

if(dat_rg >= rg_alg_ofc.data) {
if(rg_alg_ofc.cobrou == false) {
txt = `Olá - Meu Dono _ O grupo: ${rg_alg_ofc.nome_do_gp} encerrou o aluguel hoje, corre logo pra cobrar o indivíduo, texto detalhando sobre o dono: ${rg_alg_ofc.texto}`;
horadd = parseInt(dat_rg.split("/")[1])+1;
conn.sendMessage(nmrdn_dono2, {text: txt});
rg_alg_ofc.cobrou = true;
rg_alg_ofc.data = parseInt(rg_alg_ofc.data.split("/")[0])+"/"+horadd;
fs.writeFileSync("./DADOS/rg_aluguel.json", JSON.stringify(rg_aluguel))
}}}}

const comand = (conn, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {

}

}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}

// INTELIGENCIA-ARTIFICIAL
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

module.exports = {
  
// MÓDULOS ABAIXO >
  
P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, 
qrterminal, exec, spawn, 
execSync, limitefll, moment, time, hora, date, 

// FUNÇÕES JS ABAIXO >
RSM_FUNC, comand, addVote, delVote, 
getBuffer, convertSticker, fetchJson, 
fetchText, getBase64, createExif, addLimit, 
getLimit, upload, nit, 
addBanned, unBanned, BannedExpired, 
cekBannedUser, validmove, setGame, 
addComandosId, deleteComandos, getComandoBlock, 
getComandos, addComandos, palavrasANA, getpc, supre, wait, 
getExtension, generateMessageID, getGroupAdmins, 
getMembros, getRandom, banner, banner2, banner3,
temporizador, chyt, webp_mp4, simih, 

// JSON FUNÇÕES ABAIXO >
patentes, rggold, antispam, anotar, rg_aluguel, voting, sotoy, 
addVote, delVote, countMessage, comandos, daily, 
nescessario, premium, ban, black_,

// JSON JUNÇÕES DE ATIconst / DESATIconst 

joguinhodavelhajs, joguinhodavelhajs2, 
setting, logoslink,

// JS DE MENUS, INFORMAÇÕES DE UTILIZAR COMANDOS \\

menu, infoaluguel, infotransmitir, anotacao, menudono, adms, menulogos, 
efeitos, menuprem, brincadeiras, 
infocontador, infobemvindo, infolistanegra, 
infopalavrao, infobancarac, infodono, gitdobot, 
configbot, hospedar, cmd_termux, alteradores, 
destrava, destrava2, tabela, conselhob, palavrasc, 
recognize, colors, cheerio, NodeCache,
// FUNÇÃO... 

kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, EnvBotao
}