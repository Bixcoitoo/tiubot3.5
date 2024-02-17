/*============≠≠==========≠≠=============\\

NÃO PASSE O BOT PARA NINGUÉM, MUITOS VÃO FINGIR SER AMIGO. 

MUITOS DESEJAM COMPRAR PARA REVENDER E DIZER QUE FEZ.. 

EU ALEATORY NÃO FIZ TUDO, ASSUMO ISSO, PRECISEI DE AJUDA

PRA ISSO TENHO AMIGOS, PRA EVOLUIR JUNTO, ENTÃO.. 

NÃO JOGUE O ESFORÇO QUE TIVE, APESAR DE NÃO SER TANTO A 

VISTA DE QUEM JÁ CONHECE O BASTANTE DA ÁREA.. 

//=======================================*/

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat } = require('@whiskeysockets/baileys');

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, response, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, banner3, temporizador, chyt, kyun, simih, botoff, colors, comand, RSM_FUNC } = require('./consts-func.js');

//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infocontador, infobemvindo, infolistanegra, infoaluguel, infotransmitir, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, rg_aluguel, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, rggold, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, EnvBotao } = require('./consts-func.js');

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var { botoes_, forwarding, crtt, visualizarmsg, dono1, dono2, dono3, dono4, dono5, dono6 } = require("./dono/nescessario.json");

var { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau } = require("./DADOS/links.json");

var { NomeDoBot, NickDono, prefix } = require("./DADOS/settings.json");

const figurinhas = JSON.parse(fs.readFileSync("./datab/data/figurinhas.json"));

const recolherLNK = JSON.parse(fs.readFileSync("./armor/funcoes/recolherLNK.json"));

//====================≠≠===============\\
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiniciarALE() {
file = require.resolve("./iniciar.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

async function startAle() {

module.exports = conn = async(conn, qrcode, API_KEY_ALEATORY) => {
module.exports = upsert = async(upsert, conn) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(conn, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

if(fs.existsSync(`./DADOS/grupos/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./DADOS/grupos/${from}.json`));
}

if(fs.existsSync(`./DADOS/grupos/${from}.json`) && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
conn.sendMessage(info.key.remoteJid, {text: `O usuario @${info.messageStubParameters[0].split("@")[0]} foi promovido pelo @${info.participant.split("@")[0]}`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
case 30:
await delay(1000);
conn.sendMessage(info.key.remoteJid, {
text: `O ADM @${info.messageStubParameters[0].split("@")[0]} foi rebaixado para membro comum pelo adm @${info.participant.split("@")[0]}`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await conn.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

//==============(BODY)================\\

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./DADOS/grupos/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./DADOS/grupos/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;
//ISC35
const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\

try {var groupMetadata = isGroup ?  await conn.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await conn.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\
//MRP
const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

//================= Funções de Grupo 🥋

const dirGroup = `./DADOS/grupos/${from}.json`

const nescj = "./dono/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false,
sistemGold: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: ["!"],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
minerar_gold: [], ausentes: [], forca_inc: false, 
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=======(ADMS/DONO/ETC..CONST)========\\

const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt

dfndofc = setting.numerodono+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 

const isPremium = premium.includes(sender) || SoDono

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.visualizarmsg

const isVerificado = nescessario.verificado

const isAudioMenu = nescessario.menu_audio

const isAntiPv2 = nescessario.banChats

const isConsole = nescessario.consoleoff

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const isAntiPv = nescessario.antipv

const isAnticall = nescessario.anticall

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

//============(FUNÇÕES)============\\


const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm: undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

//const isAntiSpam = isGroup ? dataGp[0].antispam : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

//=======================================\\

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

var Res_SoGrupo = "Este comando só deve ser utilizado em Grupos."

var Res_SoDono = "Este comando é apenas para o meu dono utilizar..."

var Res_SoAdm = "Só Administradores do grupo podem utilizar este comando.."

var Res_BotADM = "O Bot precisa ser Administrador do grupo para utilizar este comando..."

var Res_SoModoBN = `Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`

//==========(VERIFICADO)===============\\

if(isVerificado) {
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`}}}
} else {
var selo = info
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

if(!isCmd && info.key.fromMe) return

const reply = (texto) => {
conn.sendMessage(from, { text: texto }, {quoted: info}).catch(e => {
return reply("Erro..");
})
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, {text: ytb})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
conn.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
conn.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await conn.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id: ${result.jid}`)
}
}

var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
var sections = but
var listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
conn.sendMessage(id, listMessage, {quoted: vr})  
}

const EnvLista = async(IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
listMessage = {
text: TXT1, footer: TXT2,
title: TTL, buttonText: TTB,
sections: [{
title: TTB2, rows: ENVLRW
}]};
conn.sendMessage(IDG, listMessage).catch(e => {
console.log(e);
});
};

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
conn.sendMessage(from, {text: "Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador..."})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
conn.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
conn.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup || !isGroup && nescessario.figupv) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack =`⚝ ⇝ Grupo:\n${groupName}`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}

if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)){
var pack =`⚝ ⇝ Grupo:\n${groupName}`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  

txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

conn.sendMessage(from, {text: txt}, {quoted: info})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return

big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}

blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}
mention(`
╭─────────────
┊ Registro de ausência.
┊ 
┊ ADM: @${blak.id.split("@")[0]}
┊   
╰────◉  ◊

↺➤ Mensagem: ${blak.msg}

 ─────────────`)
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-ale") || info.key.fromMe && budy.includes("reiniciar-ale")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./iniciar.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info}).catch(e => {
return reply("Erro..")
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////
if(isConsole) {
if(isGroup && info.message?.reactionMessage?.text) {
console.log(colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${isGroup ? colors.brightMagenta("GRUPO"): colors.brightMagenta("PRIVADO")} 〕${isGroup ? `〔 ${colors.cyan(groupName)} 〕`: ""}
│
│ 〔 REAÇÃO 〕: 〔 ${info.message.reactionMessage.text} 〕
│
╰─────────────────────────────────`))  
} else if(isGroup && !isCmd) {
console.log(colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
│
╰─────────────────────────────────`))
} else if(isCmd && !isGroup) {
console.log(colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.red("PRIVADO")} 〕 
│
│ 〔 COMANDO 〕 :「 ${command} 」
│
╰─────────────────────────────────  `)) 
} else if(isCmd && isGroup) {
console.log(colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
│
│ 〔 COMANDO 〕:「 ${command} 」
│
╰─────────────────────────────────`))
} else {
console.log(colors.brightGreen(`
╭──────────────────────────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕 : ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.red("PRIVADO")} 〕
│
╰─────────────────────────────────`))  
}
}

//======(JOGO-DA-VELHA)=======(Função)===\\

async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;

conn.sendMessage(from, {text: chatWon}, {quoted: info,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou 20 Golds por ter ganhado o jogo da velha🎉...*_`)   
if(JSON.stringify(rggold).includes(from)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
if(JSON.stringify(rggold[i2].usus).includes(sender)) {
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += 20
Goldrgs(rggold)
}}
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatMove);
}
} 
} 
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await conn.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

//========(CONTADOR-DE-MENSAGENS)========\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./DADOS/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./DADOS/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./DADOS/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return conn.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return conn.sendMessage(from, {text: bang}, {quoted: info})
}

conn.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
conn.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
if(dataGp[0].legenda_documento != "0") {
conn.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok','facebook','instagram','twitter','ytmp3','ytmp4','play', 'play_audio', 'play_video', 'play').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await conn.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
conn.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
conn.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return conn.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
if(dataGp[0].legenda_video == "0") {
conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
} else {
conn.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
msgpvblock = `./func/call/msg_block-${sender}.json`
fs.writeFileSync(msgpvblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
reply(msgmsglbl)
DLT_FL(msgpvblock)
setTimeout(async () => {
conn.updateBlockStatus(sender, 'block')
}, 2000)
return
}
}
//======================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
conn.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))}}}}

//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2) return reply(`Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais..`)

//======================================\\

// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
conn.ws.on('CB:call', async (B) => {
var msgcallblock = `./func/call/msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR EFETUAR LIGAÇÃO PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
conn.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}

//======================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(isGroup && JSON.stringify(countMessage).includes(from) && JSON.stringify(countMessage[i9]).includes(sender)) {

try {
var qnt_msg = countMessage[idgrupo].numbers[idusu].messages
} catch {
var qnt_msg = 0  
}

var patente = "Aspirante"
 
var level_up = 0

if(qnt_msg >= 0 && qnt_msg < 20){var patente = "Aspirante"; var level_up = 0};if(qnt_msg >= 20 && qnt_msg < 50){var patente = "Recruta"; var level_up = 1}; if(qnt_msg >= 50 && qnt_msg < 100){var patente = "Soldado"; var level_up = 2}; if(qnt_msg >= 100 && qnt_msg < 200){var patente = "Cabo"; var level_up = 3}; if(qnt_msg >= 200 && qnt_msg < 300){var patente = "Sargento"; var level_up = 4}; if(qnt_msg >= 300 && qnt_msg < 400){var patente = "Sargento I"; var level_up = 5}; if(qnt_msg >= 400 && qnt_msg < 500){var patente = "Sargento II"; var level_up = 6}; if(qnt_msg >= 500 && qnt_msg < 600){var patente = "Sargento III"; var level_up = 7}; if(qnt_msg >= 600 && qnt_msg < 700){var patente = "Sargento IV"; var level_up = 8}; if(qnt_msg >= 700 && qnt_msg < 800){var patente = "Sargento V"; var level_up = 9}; if(qnt_msg >= 800 && qnt_msg < 900){var patente = "Sargento VI"; var level_up = 10}; if(qnt_msg >= 900 && qnt_msg < 1000){var patente = "Sargento VII"; var level_up = 11}; if(qnt_msg >= 1000 && qnt_msg < 1100){var patente = "Sargento VII"; var level_up = 12}; if(qnt_msg >= 1100 && qnt_msg < 1200){var patente = "Sargento VIII"; var level_up = 13}; if(qnt_msg >= 1200 && qnt_msg < 1500){var patente = "Sargento IX"; var level_up = 14}; if(qnt_msg >= 1500 && qnt_msg < 2000){var patente = "Sargento X"; var level_up = 15}; if(qnt_msg >= 2000 && qnt_msg < 2500){var patente = "Tenente I"; var level_up = 16}; if(qnt_msg >= 2500 && qnt_msg < 2600){var patente = "Tenente II"; var level_up = 17}; if(qnt_msg >= 2600 && qnt_msg < 2700){var patente = "Tenente III"; var level_up = 18}; if(qnt_msg >= 2700 && qnt_msg < 2800){var patente = "Tenente III"; var level_up = 19}; if(qnt_msg >= 2800 && qnt_msg < 2900){var patente = "Tenente IV"; var level_up = 20}; if(qnt_msg >= 2900 && qnt_msg < 3000){var patente = "Tenente V"; var level_up = 21}; if(qnt_msg >= 3000 && qnt_msg < 3200){var patente = "Capitão I"; var level_up = 22}; if(qnt_msg >= 3200 && qnt_msg < 3400){var patente = "Capitão II"; var level_up = 23}; if(qnt_msg >= 3400 && qnt_msg < 3800){var patente = "Capitão III"; var level_up = 24};if(qnt_msg >= 3800 && qnt_msg < 4000){var patente = "Capitão IV"; var level_up = 25}; if(qnt_msg >= 4000 && qnt_msg < 5000){var patente = "Capitão V"; var level_up = 26}; if(qnt_msg >= 5000 && qnt_msg < 5500){var patente = "Major I"; var level_up = 27}; if(qnt_msg >= 5500 && qnt_msg < 6000){var patente = "Major II"; var level_up = 28}; if(qnt_msg >= 6000 && qnt_msg < 6500){var patente = "Major III"; var level_up = 29}; if(qnt_msg >= 6500 && qnt_msg < 8000){var patente = "Major IV"; var level_up = 30}; if(qnt_msg >= 8000 && qnt_msg < 9000){var patente = "Major V"; var level_up = 31};if(qnt_msg >= 9000 && qnt_msg < 10000){var patente = "Tenente C I"; var level_up = 32};if(qnt_msg >= 10000 && qnt_msg < 11000){var patente = "Tenente C II"; var level_up = 33};if(qnt_msg >= 11000 && qnt_msg < 12000){var patente = "Tenente C II"; var level_up = 34};if(qnt_msg >= 12000 && qnt_msg < 13000){var patente = "Tenente C III"; var level_up = 35};if(qnt_msg >= 13000 && qnt_msg < 15000){var patente = "Tenente C IV"; var level_up = 36};if(qnt_msg >= 15000 && qnt_msg < 17000){var patente = "Tenente C V"; var level_up = 37};if(qnt_msg >= 17000 && qnt_msg < 20000){var patente = "Coronel I"; var level_up = 38}; if(qnt_msg >= 20000 && qnt_msg < 23000){var patente = "Coronel II"; var level_up = 39}; if(qnt_msg >= 25000 && qnt_msg < 28000){var patente = "Coronel III"; var level_up = 40}; if(qnt_msg >= 28000 && qnt_msg < 30000){var patente = "Coronel IV"; var level_up = 41}; if(qnt_msg >= 30000 && qnt_msg < 35000){var patente = "Coronel V"; var level_up = 42}

if(isLevelingOn && !type == "stickerMessage") {
switch(qnt_msg) {
case 20: case 50: case 100: case 200:case 300: case 400:
case 500: case 600: case 700: case 800: case 900: case 1000:
case 1100: case 1200: case 1500: case 2000: case 2500: case 2600:
case 2700: case 2800: case 2900: case 3000: case 3200: case 3400:
case 3600: case 3800: case 4000: case 5000: case 5500: case 6000:
case 6500: case 8000: case 9000: case 10000: case 11000: case 12000: 
case 13000: case 15000: case 17000: case 20000: case 23000: 
case 25000: case 28000: case 30000:
conn.sendMessage(from, {text: `
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
✥ Parabéns: @${sender.split("@")[0]}

Você upou de level e também de patente por completar ${qnt_msg} mensagens e recebeu 25 Golds, veja as informações abaixo..\n
✧ Patente: ${patente}

✧ Level: ${level_up}

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
, mentions: [sender]}) 
if(JSON.stringify(rggold).includes(from)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
if(JSON.stringify(rggold[i2].usus).includes(sender)) {
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += 25
Goldrgs(rggold)
}}
break
}
}
}

if(isGroup) {
if(!JSON.stringify(patentes).includes(from)) {
patentes.push({
grupoID: from, 
usus: [{
id: sender, 
level_usu: level_up,
patente_usu: patente}]})
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
var i8 = patentes.map(i => i.grupoID).indexOf(from)
if(!JSON.stringify(patentes[i8].usus).includes(sender)) {
patentes[i8].usus.push({
id: sender, 
level_usu: level_up,
patente_usu: patente})
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
var i9 = patentes[i8].usus.map(i => i.id).indexOf(sender)
if(patentes[i8].usus[i9].patente_usu != patente) {
patentes[i8].usus[i9].patente_usu = patente
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
if(patentes[i8].usus[i9].level_usu != level_up) {
patentes[i8].usus[i9].level_usu = level_up
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
}

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
conn.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
conn.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
function Goldrgs(index){
fs.writeFileSync("./armor/funcoes/golds.json", JSON.stringify(index, null, 2) + '\n')
}

if(!JSON.stringify(rggold).includes(from)) {
rggold.push({grupo: from, usus: []})
Goldrgs(rggold)
}

if(isGroup && IS_sistemGold) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
var blt = []; 
for (i of rggold[i2].usus){blt.push(i.id)}

if(blt.indexOf(sender) < 0) {
rggold[i2].usus.push({id: sender, Golds: 0, data: 0, desligar: false})
Goldrgs(rggold)
}; await sleep(100)

if(JSON.stringify(rggold).includes(from) && JSON.stringify(rggold[i2].usus).includes(sender)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)

var AddGold = async(qnt, usu) => {
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds += qnt
Goldrgs(rggold)
conn.sendMessage(from, {text: `Parabéns: > @${usu.split("@")[0]} você ganhou ${qnt} Golds.. `, mentions: [usu]})
}

var ConsultarGold = async(usu) => {
conn.sendMessage(from, {text: `Olá @${usu.split("@")[0]} você contém ${rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds} Golds, breve você será bem mais rico que Elon Musk, só confia..`, mentions: [usu]})
}

var TirarGold = async(qnt, usu) => {
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
Goldrgs(rggold)
conn.sendMessage(from, {text: `Que pena... @${usu.split("@")[0]} você perdeu ${qnt} Golds.. `, mentions: [usu]})
}

var ConsumirGold = async(qnt, usu) => {
if(rggold[i2].usus[i3].Golds < qnt) return reply("Você não tem Golds suficiente para utilizar este comando..")
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
Goldrgs(rggold)
mention(`${tempo} @${sender.split("@")[0]}  após o uso do comando ${command} foi consumido ${qnt} Golds dos seus > ${rggold[i2].usus[i3].Golds+qnt} Golds`)
}

var QNTD_GOLDS = rggold[i2].usus[i3].Golds

var dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(rggold[i2].usus[i3].desligar == false) {
async function PR_Gold() {
mention(`✫ Parabéns @${sender.split("@")[0]} - 
Você recebeu 10 Golds pela primeira mensagem do dia e também 0/2 para mineração de área, utilize o comando ${prefix}minerar_gold 2 vez, ${tempo} ✫`)
rggold[i2].usus[i3].data = dattofc
rggold[i2].usus[i3].desligar = true
rggold[i2].usus[i3].Golds += 10
Goldrgs(rggold)
if(!JSON.stringify(dataGp[0].minerar_gold).includes(sender)) {
dataGp[0].minerar_gold.push({id: sender, ChanceG: 0})
setGp(dataGp)}
await sleep(200)
var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
dataGp[0].minerar_gold[i4].ChanceG = null
setGp(dataGp)
}
return PR_Gold() 
}
}

if(dattofc != rggold[i2].usus[i3].data) {
rggold[i2].usus[i3].data = dattofc
rggold[i2].usus[i3].desligar = false
Goldrgs(rggold)
}
  
}
/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
            
if(isBanned) return BannedExpired(ban)

var palavrasfr = JSON.parse(fs.readFileSync("./datab/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}
if(fs.existsSync(`./func/duelo_${from}.json`)) {
var cnt_dl = JSON.parse(fs.readFileSync(`./func/duelo_${from}.json`))
var hora122 = moment.tz('America/Sao_Paulo').format('HH:mm');
if(cnt_dl.iniciar_vot.indexOf(hora122) >= 0 && cnt_dl.iniciou == false) {
var sections = [
{title: "Votação..",
rows: [
{title: `Usuário Vermelho`, rowId: `${prefix}duelo_v1`, description: "Não poderá votar novamente, nem mudar o voto."},
{title: `Usuário Azul`, rowId: `${prefix}duelo_v2`, description: "Não poderá votar novamente, nem mudar o voto."}]
},
{title: "Terminar Votação..",
rows: [{title: "Terminar votação..", rowId: `${prefix}terminar_vot_duelo`, description: "Só o Adm pode finalizar a votação.."}]
}]
var listMessage = {
text: `Iniciou a votação e duelo finalizado.\n\n@${cnt_dl.usu1.split("@")[0]} VS @${cnt_dl.usu2.split("@")[0]}\n\nSó pode votar uma vez, boa sorte guerreiros ✍️`,
footer: `Vote com atenção e seja justo com quem merece 😉.`,
title: `Urna de votar.`,
buttonText: `Clique aqui para votar..`,
mentions: [cnt_dl.usu1, cnt_dl.usu2],
sections
}//ISC35
var sendMsg = await conn.sendMessage(from, listMessage)
await sleep(100)
cnt_dl.iniciou = true
fs.writeFileSync(`./func/duelo_${from}.json`, JSON.stringify(cnt_dl, null, 2))
}
}

//INICIO DE COMANDO DE PREFIXO
switch(command){
  
case 'listlinks': case 'links':
if(!SoDono) return reply(Res_SoDono);
LNK = "_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n"
for ( i = 0; i < recolherLNK.length; i++) {
LNK += `Link - ${i +1} _- ${recolherLNK[i].Link}\n\n`
}
reply(LNK)
break; 

case 'lista_aluguel':
if(!SoDono) return reply(Res_SoDono)
bla = "_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n"
for ( i = 0; i < rg_aluguel.length; i++) {
bla += `_- [ ${i+1} ] - Data de vencimento: ${rg_aluguel[i].data}\n\nID DO GRUPO: ${rg_aluguel[i].grupo}\n\nNome do Grupo: ${rg_aluguel[i].nome_do_gp}\n\nTexto informando sobre o Dono do grupo alugado: ${rg_aluguel[i].texto}\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n`
}
reply(bla)
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(Res_SoGrupo)  
if(!isGroupAdmins) return reply(Res_SoAdm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(`Nenhum aviso foi registrado nesse grupo, utilize o comando ${prefix}rg_aviso`)
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("Avisos referente a esse grupo, foi tirado de todos os horários registrados..")
break

case 'rg_aviso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(`Exemplo: ${prefix+command} 12:00|Boa tarde a todos, prestem atenção nas regras do grupo\n\neste exemplo.. Ele vai enviar todos os dias as 12:00 da tarde a mensagem que você registrou, já se você quer trocar o horário.. Só refazer o comando\nSe você quer apagar o aviso do grupo, apenas coloque ${prefix}rm_aviso`)
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
EnvBotao(from, sender, conn, `O Registro anterior foi apagado e recriou um novo, se deseja continuar, clique no botão abaixo..\n - Lembre-se que há avisos programados em outros horários, se quiser limpar todos, digite: ${prefix}rm_avisos`, "🤖", "1|0", [prefix+command+` ${q}`, "< PROSSEGUIR >"], info)
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("Aviso Criado com sucesso..")
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("Aviso Criado com sucesso..")
}
break
  
case 'rg_aluguel':
if(!SoDono) return reply(Res_SoDono)
if(JSON.stringify(rg_aluguel).includes(from)) return reply("Este grupo ja foi registrado")
var [data, texto] = q.trim().split("|")
if(!q.trim().includes("|")) return reply(`Cade a |\nExemplo: ${prefix+command} 01/01|Dono do grupo: 555555555 / Pra cobrar o aluguel..`)
rg_aluguel.push({grupo: from, data: data, texto: texto, nome_do_gp: groupName, cobrou: false})
fs.writeFileSync("./DADOS/rg_aluguel.json", JSON.stringify(rg_aluguel))
reply("Registro de aluguel deste grupo, foi feito com sucesso...")
break

case 'iddogrupo':
if(!SoDono) return reply(Res_SoDono)
reply(from)
break

case 'rm_aluguel':
if(!SoDono) return reply(Res_SoDono)  
if(!q.trim().includes("g.us")) return reply(`Digite o ID do grupo que deseja tirar da lista de aluguel, fórma mais fácil de achar o id é consultando o comando lista_aluguel, ou então executando o comando iddogrupo dentro do grupo que deseja tirar da lista de aluguel, e copiando o id, e executando dessa fórma.\nExemplo: ${prefix+command} 120363343392567405@g.us`)
var i6 = rg_aluguel.map(i => i.grupo).indexOf(q.trim())
rg_aluguel.splice(i6, 1)
fs.writeFileSync("./DADOS/rg_aluguel.json", JSON.stringify(rg_aluguel))
reply("Grupo tirado do registro de aluguel com sucesso..")
break

case 'minerar_gold':
case 'minerar_golds':  
if(!isGroup) return reply(Res_SoGrupo)
if(!IS_sistemGold) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`)
blit = [] 
for ( i of dataGp[0].minerar_gold){blit.push(i.id)}
if(blit.indexOf(sender) < 0) {
dataGp[0].minerar_gold.push({id: sender, ChanceG: null})
setGp(dataGp)}
await sleep(200)
var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
if(dataGp[0].minerar_gold[i4].ChanceG == 2) return reply("Você não tem mais chances de minerar Gold, volte amanhã...")
dataGp[0].minerar_gold[i4].ChanceG += 1
setGp(dataGp)
rnd = Math.floor(Math.random() * 2)
rndg = Math.floor(Math.random() * 15)
if(rnd == 0) {
mention(`Parabéns @${sender.split("@")[0]} você recebeu ${rndg} Golds, você só pode minerar 2 vez por dia... ${dataGp[0].minerar_gold[i4].ChanceG == 2 ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.." : "Ainda resta 1/2 para obter Golds, sua chance é 0/2"}`)
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += rndg
Goldrgs(rggold)
} else if(rnd != 0) {
reply(`A, você não teve sorte dessa vez, sinto muito... ${dataGp[0].minerar_gold[i4].ChanceG == 2 ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.." : "Ainda resta 1/2 para obter Golds, sua chance é 0/2"}`)
}
break
  
case 'addpalavras_forca':
case 'addpalavras_f':  
if(!SoDono) return reply(Res_SoDono)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(`Faltanda a primeira |\nExemplo: ${prefix+command} titulo|tema|dica`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} titulo|tema|dica`)
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply("Este título já foi adicionado/existente...")
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./datab/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Palavra adicionada ao jogo da forca com sucesso...")
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return reply(Res_SoDono) 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./datab/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Palavra tirada do jogo da forca com sucesso...")
break

case 'rv-forca':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isGroup) return reply(Res_SoGrupo)
if(dataGp[0].forca_inc == false) return reply(`O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`)
rv_forca()
reply("Forca resetada com sucesso...")
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
if(!isGroup) return reply(Res_SoGrupo)
try {
if(dataGp[0].forca_inc) return reply(`Jogo já está em andamento, caso queira resetar, fale com um adm para executar ${prefix}rv-forca, ou tente acertar o jogo da forca que deve está logo a cima.`)
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
rsp_fr = `- Jogo da forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
|________
       _¦_\n\n\n\n\n\n\n
${linha_fr}\n
_____________________
\n_- JOGO INICIADO -_
\nUse ${prefix}r-f letra que talvez exista por sua observação.\n\nOu ${prefix}r-f nome todo\n
_____________________
`
reply(rsp_fr) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return reply(Res_SoGrupo)  
if(!dataGp[0].forca_inc) return reply(`O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`)
if(!q.toLowerCase().trim()) return reply("Digite a letra que deseja responder..")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
if(q.trim().length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra já foi utilizada..")
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
var RST_T = `- Jogo da forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
__________-_
         _|_\n
        ${ERROS+ERRQ >= 1 ? "🤡":""}\n      ${ERROS+ERRQ >= 2 ? "👈":""} ${ERROS+ERRQ >= 3 ? "👉":""}  \n         ${ERROS+ERRQ >= 4 ? "👖":""}\n         ${ERROS+ERRQ >= 5 ? "👞":""} ${ERROS+ERRQ >= 6 ? "👞":""}
\n${linha_fr}\n
___-________-_____\n
Letras ja utilizadas: ${letra_ut}
___-________-_____
`
if(q.length > 2) {reply("Humm, espertinho quer acertar a palavra toda")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou${IS_sistemGold ? " 10 Golds," :" "}bom menino(a), irei resetar o jogo...`: DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} >${IS_sistemGold ? ` você recebeu 5 Golds, por ser o último..,` : " "}irei resetar o jogo..`:`Você acertou uma letra e ganhou${IS_sistemGold ?" 2 Golds ":" "}continue assim..`}`)
if(IS_sistemGold) {
rggold[i2].usus[i3].Golds += q.length > 2 ? 10:DM_FR.acertos == DM_FR.palavra_ofc.length ? 5:2
Goldrgs(rggold)
}
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(RST_T)
} else {
reply(`${q2.length > 2 ? `Infelizmente você perdeu${IS_sistemGold ? " 3 Golds": ""}, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` :ERROS+ERRQ == 6 ? `Aa, você completou 6 Erros, e perdeu ${IS_sistemGold ? "2 Golds infelizmente,":", "}irei resetar o jogo..`:`Você Errou, e perdeu ${IS_sistemGold ? "2 Golds":""} 😥..`}`)
if(IS_sistemGold) {
rggold[i2].usus[i3].Golds += 2
Goldrgs(rggold)
}
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break
 
case 'figurinhas':
if (!q) return reply("Insira a qnd de figu que deja que eu envie")
if (!Number(args[0]) || Number(q.trim()) > 5) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 5..")
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
conn.sendMessage(from, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
for (i = 0; i < q; i++) {
await sleep(680)
figuss()
}
break

case 'limpar_mortos-cnt':
if(!SoDono) return reply(Res_SoDono)
if(!isGroup) return reply(Res_SoDono)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(Res_SoDono)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(Res_SoGrupo)  
if(!isGroupAdmins) return reply(Res_SoAdm)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(Res_SoGrupo)
if(command == "anotacao" || command == "nota") {
if(!q.trim()) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(i2 < 0) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2]?.puxar 
txtin = "──────────────────\n\n"
for ( i = 0; i < antr?.length; i++) {
txtin += `↝ Anotação: ⟮ ${anotar[i2]?.puxar[i]?.nota} ⟯ - 〈 ${anotar[i2]?.puxar[i]?.anotacao} 〉\n\n`
}
txtin += "──────────────────\n\n"
mention(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
conn.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
conn.sendMessage(from, {image: {url: q}}, {quoted: info}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=${q}&apikey=`+API_KEY_ALEATORY)
conn.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'playstore':
try {
if(!q.length > 2) return reply("Cade o título do apk que deseja pesquisar?")
async function ytsrcbtt() {
var Lrows = []

data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/playstore?nome=${q}&apikey=`+API_KEY_ALEATORY)

for(let a of data.resultados) {
Lrows.push({title: `${a.title}\n\n----------------------------------------------\n`, description: `ID: ${a.appId}\n\n----------------------------------------------\n\nURL: ${a.url}\n\n----------------------------------------------`, rowId: `a`})
}

listMessage = {
text: "Pesquisa realizada: Play Store",
footer: "Canal do Bot : youtube.com/aleatoryconteudos",
title: `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`,
buttonText: "Lista da pesquisa - Clique aqui!",
sections: [{
title: "Resultado das informações :", 
rows: Lrows
}
]

}
conn.sendMessage(from, listMessage)
}
ytsrcbtt().catch(e => {
reply("Erro.")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'linkdogp_revelar':
if(!q.trim()) return
try {
bla2 = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/rev_grp-whats?URL=${q.trim()}&apikey=`+API_KEY_ALEATORY)
reply(bla2.URL)
} catch {
reply("Titulo não encontrado, pesquise por outro")
}
break

case 'grupos':
if(!q.trim()) return reply(`Digite o título, para pegar resultados de grupos de WhatsApp, referente a seu título..\nExemplo: ${prefix+command} zoeira`)
try {
var Lrows = []

bla = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesq_grp-whats?ttl=${q}&apikey=`+API_KEY_ALEATORY)

for(let a of bla) {
Lrows.push({title: a.LINK, description: a.TITULO, rowId: `${prefix}linkdogp_revelar ${a.LINK}`})
}

listMessage = {
text: "Pesquisa realizada: Sobre grupos de WhatsApp",
footer: "Canal do Bot : youtube.com/aleatoryconteudos",
title: `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`,
buttonText: "Lista da pesquisa - Clique aqui!",
sections: [{
title: "Resultado da pesquisa :", 
rows: Lrows
}]
}
conn.sendMessage(from, listMessage).catch(e => {
reply("Titulo não encontrado, pesquise por outro")
})
} catch {
reply("Titulo não encontrado, pesquise por outro")
}
break

case 'logos1':
if(!q) return reply(`Exemplo: ${prefix+command} Aleatory`);
var LOGOS = ['shadow','metalgold','cup','txtborboleta','cemiterio','efeitoneon','harryp','lobometal','neon2','madeira','lovemsg3','coffecup','coffecup2','florwooden','narutologo','fire','romantic','smoke','papel','lovemsg','lovemsg2','fiction','3dstone','areia','style','blood','pink','cattxt','neondevil','carbon','metalfire','thunder','vidro','jokerlogo','transformer','demonfire','jeans','metalblue','natal','ossos','asfalto','break','glitch2','colaq','neon3','nuvem','horror','matrix','berry','luxury','lava','thunderv2','neongreen','neve','neon','neon1','neon3d','gelo','neon3','3dgold','lapis','toxic','demongreen','rainbow','halloween','angelwing','hackneon','fpsmascote','equipemascote','txtquadrinhos','ffavatar','mascotegame','angelglx','gizquadro','wingeffect','blackpink','metalgold','girlmascote','logogame'];
var ENV = [];
for(var a = 0; a < LOGOS.length; a++) {
ENV.push({title: LOGOS[a], description: `Logo personalizadas: ${a+1}`, rowId: prefix+LOGOS[a]+` ${q}`})}
EnvLista(from, `Texto: ${q}`, "Diversas logos", "Escolha a qual desejar", "Clique aqui..", "Logos top..", ENV);
break

case 'ytsearch':
try {
if(!q.length > 2) return reply("Cade o título da música que deseja pesquisar?")
var ENV = []
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=`+API_KEY_ALEATORY)
for(var a of data) {
ENV.push({title: a.titulo, description: `Tipo: Audio >  Descrição ${a.desc}\nDuração: ${a.tempo}\nPostado: ${a.postado}`, rowId: `${prefix}play_audio ${a.url}`}, {title: a.titulo, description: `Tipo: Video >  Descrição ${a.desc}\nDuração: ${a.tempo}\nPostado: ${a.postado}`, rowId: `${prefix}play_video ${a.url}`})}
EnvLista(from, `Pesquisa realizada: ${q}`, "Canal do Bot : youtube.com/aleatoryconteudos", `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`, "Lista da pesquisa - Clique aqui!", "Escolha com atenção..", ENV);
} catch (e) {
return reply("Erro..")
}
break

case 'infoanotacao':
conn.sendMessage(from, {text: anotacao(prefix)})
break

case 'pesquisa': case 'pesquisar':  
bla = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_agora?pesq=${q}&apikey=`+API_KEY_ALEATORY)
conn.sendMessage(from, {text: bla.msg}, {quoted: info})
break

case 'menu':
if(!botoes_) {
EnvBotao(from, sender, conn, menu(prefix, NomeDoBot, sender), "Leia com atenção", `3|${logoslink.logo}`, [`${prefix}brincadeiras`, `░ MENU DE BRINCADEIRAS ░`, `${prefix}logos`, `░ MENU DE LOGOS ░`, `${prefix}infodono`, `░ INFORMAÇÕES DO DONO ░`], selo) 
} else {
botaoale = [
{title: "Section 1",
rows: [
{title: "Menu de Comandos Principal", rowId: `${prefix}menup`},
{title: "Menu de Ativar comandos de adm..", rowId: `${prefix}ativacoes`},
{title: "Menu de Ativar comandos de dono..", rowId: `${prefix}ativacoes_dono`},
{title: "Funções de Administradores do grupo", rowId: `${prefix}menuadm`},
{title: "Logos de texto em fotos / Efeitos", rowId: `${prefix}menulogos`},
{title: "Menu de brincadeiras", rowId: `${prefix}brincadeiras`},
{title: "Informações do proprietário", rowId: `${prefix}infodono`},
{title: "A git de instalação do bot", rowId: `${prefix}gitdobot`},
{title: "Audio informando sobre o bot", rowId: `${prefix}infobot`, description: "Lista de menus de comandos / informando.."}]
}]
sendlistA(from, `Menu de comandos\n\n${tempo} Usuário: ${pushname}${isGroup ?`\n\nPatente: ${patente}\n\nLevel: ${level_up}`: ""}`, "Informações gerais", "Leia com atenção..", "Lista de Comandos", botaoale, info)
}
break

case 'ativarcmds':
case 'ativacoes':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
botaoale = [
{title: "Sessão - ( 1 )",
rows: [
{title: `${!isAntiLinkHard ? "Ativar proteção contra envio de links.." : "Desativar proteção contra envio de links.."}`, rowId: `${!isAntiLinkHard ? `${prefix}antilink 1`: `${prefix}antilink 0`}`},
{title: `${!isAntiNotas ? "Ativar proteção contra envio de notas fake.." : "Desativar proteção contra envio de notas fake..."}`, rowId: `${!isAntiNotas ? `${prefix}antinotas 1`: `${prefix}antinotas 0`}`},
{title: `${!isAntiFlood ? "Ativar limite de caracteres.." : "Desativar limite de caracteres..."}`, rowId: `${!isAntiFlood ? `${prefix}limitecaracteres 1`: `${prefix}limitecaracteres 0`}`},
/*{title: `${!isAntiSpam ? "Ativar ANTI SPAM.." : "Desativar ANTI SPAM..."}`, rowId: `${!isAntiSpam ? `${prefix}antispam 1`: `${prefix}antispam 0`}`},*/
{title: `${!isAntifake ? "Ativar proteção contra estrangeiros.." : "Desativar proteção contra estrangeiros.."}`, rowId: `${!isAntifake ? `${prefix}antifake 1` : `${prefix}antifake 0`}`},
{title: `${!isAnticatalogo ? "Ativar para remoção de catálogo..." : "Desativar para remoção de catálogo..."}`, rowId: `${!isAnticatalogo ? `${prefix}anticatalogo 1`: `${prefix}anticatalogo 0`}`},
{title: `${!Antiloc ? "Ativar para remoção de Localização..." : "Desativar para remoção de Localização..."}`, rowId: `${!Antiloc ? `${prefix}antiloc 1`: `${prefix}antiloc 0`}`},
{title: `${!isx9 ? "Ativar o x9 de alteração de cargo de adm.." : "Desativar o x9 de alteração de cargo administrativo.."}`, rowId: `${!isx9 ? `${prefix}x9 1` : `${prefix}x9 0`}`},
{title: `${!isX9VisuUnica ? "Ativar o x9 de visu-única.." : "Desativar o x9 de visu-única.."}`, rowId: `${!isX9VisuUnica ? `${prefix}x9visuunica 1` : `${prefix}x9visuunica 0`}`},
{title: `${!isModobn ? "Ativar o modo brincadeira.." : "Desativar o modo brincadeira.."}`, rowId: `${!isModobn ? `${prefix}modobrincadeira 1` : `${prefix}modobrincadeira 0`}`},
{title: `${!isAntilinkgp ? "Ativar proteção contra envio de links de gp.." : "Desativar proteção contra envio de links de gp.."}`, rowId: `${!isAntilinkgp ? `${prefix}antilinkgp 1`: `${prefix}antilinkgp 0`}`},
{title: `${!isWelkom ? "Ativar o Bem Vindo para novatos.." : "Desativar o Bem Vindo para novatos.."}`, rowId: `${!isWelkom ? `${prefix}bemvindo 1` : `${prefix}bemvindo 0`}`},
{title: `${!isWelkom2 ? "Ativar o Bem Vindo2 para novatos.." : "Desativar o Bem Vindo para novatos.."}`, rowId: `${!isWelkom ? `${prefix}bemvindo2 1` : `${prefix}bemvindo2 0`}`},
{title: `${!isLevelingOn ? "Ativar o sistema de level.." : "Desativar o sistema de level.."}`, rowId: `${!isLevelingOn ? `${prefix}leveling 1` : `${prefix}leveling 0`}`},
{title: `${!isAntiVid ? "Ativar para remoção de vídeos..." : "Desativar para remoção de vídeos..."}`, rowId: `${!isAntiVid ? `${prefix}antivideo 1`: `${prefix}antivideo 0`}`},
{title: `${!isAntiImg ? "Ativar para remoção de imagem..." : "Desativar para remoção de imagem..."}`, rowId: `${!isAntiImg ? `${prefix}antiimg 1`: `${prefix}antiimg 0`}`},
{title: `${!isAntiAudio ? "Ativar para remoção de audio..." : "Desativar para remoção de audio..."}`, rowId: `${!isAntiAudio ? `${prefix}antiaudio 1`: `${prefix}antiaudio 0`}`},
{title: `${!Antidoc ? "Ativar para remoção de Documento..." : "Desativar para remoção de Documento..."}`, rowId: `${!Antidoc ? `${prefix}antidoc 1`: `${prefix}antidoc 0`}`},
{title: `${!isAntiCtt ? "Ativar para remoção de VCARD/CONTATO..." : "Desativar para remoção de VCARD/CONTATO..."}`, rowId: `${!isAntiCtt ? `${prefix}anticontato 1`: `${prefix}anticontato 0`}`},
{title: `${!isAntiSticker ? "Ativar para remoção de figurinhas..." : "Desativar para remoção de figurinhas..."}`, rowId: `${!isAntiSticker ? `${prefix}antisticker 1`: `${prefix}antisticker 0`}`},
{title: `${!isAutofigu ? "Ativar cmd de fazer figurinha automática.." : "Desativar cmd de fazer figurinha auto..."}`, rowId: `${!isAutofigu ? `${prefix}autofigu 1`: `${prefix}autofigu 0`}`},
{title: `${!isSimi2 ? "Ativar IA de conversar no grupo.." : "Desativar IA de conversar no grupo....."}`, rowId: `${!isSimi2 ? `${prefix}simih2 1`: `${prefix}simih2 0`}`},
{title: `${!isAutorepo ? "Ativar auto resposta.." : "Desativar auto resposta.."}`, rowId: `${!isAutorepo ? `${prefix}autorepo 1`: `${prefix}autorepo 0`}`},
{title: "Boa sorte", rowId: `bla`, description: "Comandos de *Ativar* e *Desativar*.."}]
}]
sendlistA(from, "Comandos de Ativar", `Administrador : ${pushname}`, "Ative *Conscientemente* sobre o que cada função faz..", "Lista de Funções..", botaoale, info)
break 

case 'ativarfuncoesdono':
case 'ativacoes_dono':  
if(!SoDono) return reply(Res_SoDono)
botaoale = [
{title: "Sessão - ( 1 )",
rows: [
{title: `${!isAnticall ? "Ativar - para bloquear quem ligar para o bot.." : "Desativar - para bloquear quem ligar para o bot.."}`, rowId: `${!isAnticall ? `${prefix}antiligar`: `${prefix}antiligar`}`},
{title: `${!isVisualizar ? "Ativar - visualização automática msg pv/gp" : "Desativar - visualização automática para ler todas mensagens pv/gp do bot.."}`, rowId: `${!isAntilinkgp ? `${prefix}visualizarmsg`: `${prefix}visualizarmsg`}`},
{title: `${!isConsole ? "Ativar - LEITURA NO CONSOLE DE CMD/MSG" : "Desativar - LEITURA NO CONSOLE DE CMD/MSG"}`, rowId: `${!isConsole ? `${prefix}console`: `${prefix}console`}`},
{title: `${!isAntiPv ? "Ativar - Bloquear quem mandar mensagem pv..": "Desativar - Bloquear quem mandar mensagem pv.."}`, rowId: `${!isAntiPv ? `${prefix}antipv`: `${prefix}antipv`}`},
{title: `${!isAntiPv2 ? "Ativar Floodar quem mandar mensagem pv..": "Desativar - Floodar quem mandar mensagem pv.."}`, rowId: `${!isAntiPv2 ? `${prefix}antipv2`: `${prefix}antipv2`}`},
{title: `${!isAudioMenu ? "Ativar - Audio do menu..": "Desativar - Audio do menu.."}`, rowId: `${!isAudioMenu ? `${prefix}audio-menu`: `${prefix}audio-menu`}`},
{title: `${!isVerificado ? "Ativar - Verificado dos comandos..": "Desativar - Verificado dos comandos.."}`, rowId: `${!isVerificado ? `${prefix}verificado-global`: `${prefix}verificado-global`}`},
{title: `${!isBotoff ? "Ativar - Desligar o bot completamente..": "Desativar - Desligar o bot completamente.."}`, rowId: `${!isBotoff ? `${prefix}botoff`: `${prefix}boton`}`},
{title: "Boa sorte", rowId: `bla`, description: "Comandos de *Ativar* e *Desativar*.."}]
}]
sendlistA(from, "Comandos de Ativar", `Dono : ${pushname}`, "Ative *Conscientemente* sobre o que cada função faz..\nSão todas referente ao bot..", "Lista de Funções..", botaoale, info)
break 

case 'menup33':
case 'helpp':
case 'comandosp':
if(isAudioMenu) {
audiomenu = await fs.readFileSync("./datab/audios/menucmd.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}  
EnvBotao(from, sender, conn, menu(prefix, NomeDoBot, sender), "Leia com atenção", `3|${logoslink.logo}`, [`${prefix}brincadeiras`, `░ MENU DE BRINCADEIRAS ░`, `${prefix}logos`, `░ MENU DE LOGOS ░`, `${prefix}infodono`, `░ INFORMAÇÕES DO DONO ░`], selo) 
break 

case 'verificado-global': 
if(!SoDono) return reply(Res_SoDono)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply(`- O Verificado foi Ativado de todos os comandos que tem, para tirar novamente só digitar o comando novamente..`)
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`- O Verificado de todos os menu / comando, foi Desativado, para ativar novamente só digitar o comando novamente..`) 
}
break

case "botoes":
if(!SoDono) return reply(Res_SoDono);
if(botoes_) {
botoes_ = false
nescessario.botoes_ = false
setNes(nescessario)
reply("Botoes Desativado com sucesso, para ativar novamente só digitar o comando denovo.");
} else if(!botoes_) {
botoes_ = true
nescessario.botoes_ = true
setNes(nescessario)
reply("Botoes Ativado com sucesso, para desativar novamente só digitar o comando denovo.");
}
break;

case 'audio-menu': 
if(!SoDono) return reply(Res_SoDono)
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`- O Áudio foi ativado para o menu _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`- O Áudio foi Desativado do menu _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break

case 'console':   
if(!SoDono) return reply(Res_SoDono)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`- O comando de tirar o console foi ativado _- COM SUCESSO - _ Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- O comando de tirar o console foi Desativado  _- COM SUCESSO - _ Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break

case 'lo5gos':
case 'menu5logo':
case 'menulog5os':  
EnvBotao(from, sender, conn, menulogos(prefix, sender), "Leia com atenção", "3|"+logoslink.logo, [`${prefix}brincadeiras`, `░ MENU DE BRINCADEIRAS ░`, `${prefix}alteradores`, `░ ALTERAR AUDIO/VIDEO ░`, `${prefix}efeitosimg`, `░ EFEITOS DE IMAGEM ░`], selo)
break 

case 'menug5adm':
case 'menuad65ms':
case 'adm':  
EnvBotao(from, sender, conn, adms(prefix, sender), `☂️`, "2|"+logoslink.logo, [`${prefix}infobot`, `░ ÁUDIO DE INFORMAR SOBRE O DONO ░`, `${prefix}infodono`, `░ INFORMAÇÕES DO DONO ░`], selo) 
break 

case 'menuy6dono':
case 'donome56nu':  
EnvBotao(from, sender, conn, menudono(prefix, sender), `☔`,  "2|"+logoslink.logo, [`${prefix}infobot`, `░ ÁUDIO DE INFORMAR SOBRE O DONO ░`, `${prefix}infodono`, `░ INFORMAÇÕES DO DONO ░`], selo) 
break 

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
EnvBotao(from, sender, conn, efeitos(prefix, sender), `🌀`, "3|"+logoslink.logo, [`${prefix}brincadeiras`, `░ MENU DE BRINCADEIRAS ░`, `${prefix}logos`, `░ MENU DE LOGOS ░`, `${prefix}menu`,`░ MENU ░`], selo)
break

case 'owne3r':
numerodn = numerodono_ofc
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: infodono(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo})
break 

case 'alteradores':
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: alteradores(prefix, sender), mentions: [sender]}, {quoted: selo})
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`) 
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: brincadeiras(prefix, sender), mentions: [sender]}, {quoted: selo})
break 

case 'menuprertmium':
case 'menuggprem':
conn.sendMessage(from, {text: menuprem(prefix, sender), mentions: [sender]}, {quoted: selo})
break

case 'configurar-bot':
conn.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'comandos-term556ux':
conn.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break

case 'hospedar-67heroku':
conn.sendMessage(from, {text: hospedar(prefix)}, {quoted: selo})
break

case 'destrava':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
conn.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
break 

case 'perfil':
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
conn.sendMessage(from, {image: {url: ppimg}, caption: dptr, mentions: [sender]}, {quoted: selo})
} catch (e) {
console.log(e)
}
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
conn.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'tabela':
conn.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
conn.sendMessage(from, {text: destrava2 (prefix)}, {quoted: info})
break 

case 'infobemvindo':
case 'infobv':  
conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${NomeDoBot}🔥`

conn.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'infocontador':
case 'infobanghost':  
conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'infolistanegra':
conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infoaluguel':
conn.sendMessage(from, {text: infoaluguel(prefix, pushname)}, {quoted: selo})
break

case 'infotransmitir':
conn.sendMessage(from, {text: infotransmitir(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break


//========(FUNÇÕES-PREMIUM-AQUI)=======\\


case 'ler': 
case 'ocr':   
case 'lerfoto':  
if(!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
DLT_FL(media)
})
.catch(err => {
reply(err.message)
DLT_FL(media)
})
} else {
reply('Somente fotos!')
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${NomeDoBot}* 」*────`
mention(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
conn.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'cep':
try {
if(!q) return reply("digite o CEP que deseja buscar informações..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/consultacep?cep=51240230&apikey=`+API_KEY_ALEATORY)
reply(`Cep: ${ABC.cep}\nRua: ${ABC.rua}\nComplemento: ${ABC.complemento}\nBairro: ${ABC.vizinhança}\nCidade: ${ABC.cidade}\nEstado: ${ABC.estado}\nGia: ${ABC.gia}\nIbge: ${ABC.ibge}\nddd: ${ABC.ddd}\nSiafi: ${ABC.siafi}`)
} catch (e) {
return reply("Erro..")
}
break

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/aleatoryconteudos`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_SoAdm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
conn.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isGroup) return reply(Res_SoGrupo)
if(!isBotGroupAdmins) return reply(Res_BotADM)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroupAdmins && !isPremium) return reply("Só ADM ou premium")
if(!isBotGroupAdmins) return reply(Res_BotADM)
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await conn.groupInviteCode(from)
conn.sendMessage(rcrt, {image:{url: logoslink.logo}, caption: "Clique no símbolo a cima da imagem para entrar no grupo...", contextInfo: {
externalAdReply: {
title:"- Clique aqui para participar do grupo",
body: "",
reviewType: "PHOTO", 
thumbnailUrl: logoslink.logo, 
sourceUrl: `https://chat.whatsapp.com/`+linkgc, 
mediaType: 2
}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'listatm':
if(!SoDono) return reply(Res_SoDono)
rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "_-_-_-_-_-_-_-_-_-_-_-_-\n\n";
for ( i = 0; i < rgp.length; i++) {
bl += `${i+1} - ID: ${rgp[i].id}\n\n- NOME DO USUÁRIO OU GRUPO: ${rgp[i].infonome}\n\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(Res_SoDono)
rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo ja está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./func/TMGP.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(Res_SoDono)
rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./func/TMGP.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if(!SoDono) return reply(Res_SoDono)
var rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão Do Dono: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão Do Dono: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão Do Dono: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão Do Dono: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão Do Dono: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
conn.sendMessage(rgp[i].id, DFC)}
break

case 'grupo': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
conn.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
conn.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins)return reply(Res_SoAdm)
try {
var ppUrl = await conn.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
conn.sendMessage(from, {image: {url: ppUrl}, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`, thumbnail: null}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação Do Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${NickDono}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
conn.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
async function marcac() {
bla = []
blad = `\n𝑀𝐸𝑀𝐵𝑅𝑂𝑆 𝐶𝑂𝑀𝑈𝑀\n𝐵𝑂𝑇: ${NomeDoBot}\n\n-_- Do Grupo: ${groupName} -_-${!q ? "" : `\n\n~» Mensagem: ${q}`}\n\n`
for( let i of somembros ) {
blad += `✥➤ @${i.split("@")[0]}\n\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`Olá Adm - Não contêm Membros comum no Grupo: ${groupName}, apenas - [ ADMINISTRADORES ]`)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec("cd DADOS/ALEATORY-QR && rm -rf pre-key* sender* session*")
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'reviver':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply("Comando Desativado pelo dono...")
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await conn.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
conn.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot...");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot");
if(groupAdmins.includes(menc_os2)) return reply("Não pode advertir ADMS..");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo..")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = `Opa: @${menc_os2.split("@")[0]} você foi advertido ${dfqn}/3, tome cuidado, com 3 advertências, você será removido...`
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {conn.sendMessage(from, {text: `Adeus usuário @${menc_os2.split("@")[0]}, você completou 3 advertências 😪, fale com quem a baniu para ter noção de o que ocorreu..`, mentions: [menc_os2]})
await sleep(1500)
conn.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply(Res_SoAdm)
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'sairdogp':
if(!SoDono)return reply(Res_SoDono)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await conn.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
conn.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
conn.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await conn.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await conn.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await conn.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link"
}
teks1 += `• *Grupo* : ${i}\n• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• Link do grupo: https://chat.whatsapp.com/${linkdogp}\n• *Dono_Ofc*: ${metadt.subjectOwner}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(Res_SoAdm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `*• Membro:* @${uscnt.id.split('@')[0]}\n*• Comandos:* ${uscnt.cmd_messages}*\n*• Mensagens:* ${uscnt.messages}*\n*• Aparelho:* ${uscnt.aparelho}*\n\n----------------------------------\n\n`
}
mention(teks)
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q}  mensagens..`)
bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `${ac +1} - _ Usuário: @${blue[ac].split("@")[0]}\n\n`
}
mention(bli)
break

case 'banghost':
if(!isGroup) return reply(Res_SoGrupo)  
if(!SoDono) return reply(Res_SoDono)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
conn.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
txt = body.slice(10)
txtt = args.join(" ")
txt1 = txt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Oi Amor, sdds`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
conn.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./DADOS/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do seu bot foi alterado com sucesso para : ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./DADOS/settings.json', JSON.stringify(setting, null, 2))
reply(`O Nick Do Dono foi configurado para : ${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)  
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`O número dono foi configurado com sucesso para : ${q}`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono[0] = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./DADOS/settings.json', JSON.stringify(setting, null, 2))
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
setting.prefix = q
fs.writeFileSync('./DADOS/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`- Calma ae amigo(a), já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.logo.splice([])
fs.writeFileSync('./DADOS/logo.jpg', JSON.stringify(logoslink, null, 2))
setTimeout(() => {
logoslink.logo.push(res)
fs.writeFileSync('./DADOS/logo.jpg', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
}, 1000)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break

case 'setprefixs':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./DADOS/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
conn.groupUpdateSubject(from, `${body.slice(9)}`)
conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'fotobot':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
conn.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if(!menc_jid2[0] || menc_jid2[1]) return reply("Marque o @ do usuário para roubar a foto do perfil dele, para a do bot..")
let { jid, id, notify } = groupMembers.find(x => x.id === menc_jid2[0])
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
conn.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
conn.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${sender.split('@')[0]}\nMensagem : ${body.slice(6)}`})
}
reply('Transmissão enviada..')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${sender.split('@')[0]}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono1 = q.trim()
dono1 = nescessario.dono1
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono2 = q.trim()
dono2 = nescessario.dono2
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono3 = q.trim()
dono3 = nescessario.dono3
setNes(nescessario)
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono4 = q.trim()
dono4 = nescessario.dono4
setNes(nescessario)
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono5 = q.trim()
dono5 = nescessario.dono5
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono6 = q.trim()
dono6 = nescessario.dono6
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de donos do bot ${NomeDoBot} ] 

Dono Oficial do bot: ${numerodono_ofc}

- [ 1 ] ${dono1}\n- [ 2 ] ${dono2}\n- [ 3 ] ${dono3}\n- [ 4 ] ${dono4}\n- [ 5 ] ${dono5}\n- [ 6 ] ${dono6}`
reply(p)
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(Res_SoGrupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 
blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`
mention(blity)
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Comando apenas para administradores ou dono..")
if(DonoOficial) {
if(fs.existsSync("./func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./func/afk/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Comando apenas para administradores ou dono..")  
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'serpremium':
case 'serprem':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
premium.push(nmrdn)
fs.writeFileSync('./DADOS/premium.json', JSON.stringify(premium))
mention(`Pronto @${numerodono_ofc} você foi adicionado na lista premium.`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.key
}
}
sendMsg = await conn.sendMessage(from, reactionMessage)
break

case 'iniciar_o_jogo':
if(jogo_iniciado) return reply("o jogo já foi iniciado, aguarde terminar..")
mentions(`- ${tempo} Atenção a todos do grupo, o Usuário @${sender.split("@")[0]} iniciou o jogo `, sender)
break

case 'addpremium':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
bla = premium.includes(marc_tds)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(marc_tds)
fs.writeFileSync('./DADOS/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `👑@${marc_tds.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [marc_tds]}, {quoted: info})  
break 

case 'delpremium':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
if(!premium.includes(marc_tds)) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = marc_tds
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./DADOS/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` @${marc_tds.split("@")[0]} foi tirado da lista premium com sucesso..`, mentions: [marc_tds]}, {quoted: info})
break

case 'limpar':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
if(!isPremium) return reply("Apenas premium..")
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroupAdmins && !isPremium) return reply(Res_SoAdm)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
setNes(nescessario)
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
setNes(nescessario)
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(Res_SoDono)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`Ativando anti ligação para o bot...\ncaso liguem para o bot serão bloqueado..`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('Desativando anti ligação para o bot...')
}
break

case 'antipv':  
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Ativando anti privado para o bot...\ncaso mandem mensagem para o bot serão bloqueado..`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('Desativando anti privado para o bot...')
}
break

case 'antipv2':
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv2) {
nescessario.banChats = true
setNes(nescessario)
reply("*Sucesso alterado para modo antipv, pv não poderá ser utilizado, mas não bloquearei, só flodarei mensagem a cada mensagem dele..")
} else if(isAntiPv2) {
nescessario.banChats = false
setNes(nescessario)
reply("*Sucesso modo antipv desligado, pv liberado.")
}
break

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse Número ja esta incluso*')
ban.push(blcp)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
conn.sendMessage(from, {text: jrc.trim(), mentions: ban})
break

case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return conn.sendMessage(from, {text: `root@ALEATORY-BOT:~ ${err}`}, {quoted: info})
if(stdout) {
conn.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
conn.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'dados':
case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
━━━━┉┉┉┅┅┅┅┉┉┉━━━━

 ू ፝͜❥ ${tempo} @${sender.split("@")[0]} 

 O Bot se encontra online por:
 
  ͢   ${kyun(uptime)}

  ͢   Velocidade de Resposta: ${String(r.toFixed(3))}

━━━━┉┉┉┅┅┅┅┉┉┉━━━━`
conn.sendMessage(from, {text: bla, mentions: [sender]}, {quoted: selo})
break

case 'gtts':
try {
if (args.length < 1) return conn.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: info})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
conn.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply("Erro..")
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'blockcmd':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit) return reply(Res_SoDono)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit) return reply(Res_SoDono)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
conn.sendMessage(from, {text: tkks.trim()}, {quoted: info})
break

case 'avalie':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if(args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
conn.sendMessage(nmrdn, {text: tdptls}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
conn.sendMessage(nmrdn, {text: teks1}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
conn.sendMessage(nmrdn, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'gimage':
try {
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/google-img?nome=${q}&apikey=`+API_KEY_ALEATORY);
conn.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)].url}}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;
case 'pinterest':
try {
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pinterest?nome=${q}&apikey=`+API_KEY_ALEATORY);
conn.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)]}}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'triggered':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage || !isQuotedVideo) && !q.length <= 1) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
bld = await getBuffer(`https://api.bronxyshost.com.br/api-bronxys/trigger?url=${res}&apikey=`+API_KEY_ALEATORY)
rst = await upload(bld)
enviarfiguUrl(conn, from, rst, info)
} else {
reply("Marque uma imagem no WhatsApp...")
}
} catch {
reply("Erro")
}
break

case 'videourl':
case 'gerarlink':
case 'videopralink':
case 'imgpralink':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res) 
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch {
reply('Ocorreu algum Erro, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

case 'ytsearch2':
try {
if(!q) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=`+API_KEY_ALEATORY)
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\nTempo: ${i.tempo}\nPostado: ${i.postado}\n\nDescrição: ${i.desc}\n\n`;
ABC += `${"-\t".repeat(13)}\n\n`
}
reply(ABC);
} catch (e) {
return reply(`Erro....`)
}
break

case 'infoduelo':
mention(`Olá @${sender.split("@")[0]}, irei informar sobre o comando duelo, ele é usado mais para grupos de figurinhas, alguns grupo de figurinhas, gosta de interagir através de figurinhas, ae o Adm grupo, da a oportunidade de 2 usuários que tem uma interação bem top no momento, ae eles 2 realiza o duelo, mas só eles pode enviar mensagens no grupo, ae vão trocando figurinhas.. Depois vai ter uma votação, e o pessoal do grupo que assistiu, vota no qual foi o melhor no duelo de figurinhas kkk, Mas vamos lá, irei mostrar o comando.. 

O exemplo é o seguinte:

${prefix}duelo @fulano1 @fulano2/12:30

Primeiro você marca os 2 que vão duelo, e a /, depois o horário que vai acabar o duelo, e vai iniciar a votação.. 

Quando chegar no horário determinado, o bot vai enviar uma lista para os usuários do grupo decidir, votar em quem foi melhor no duelo, depois o Adm pode encerrar a votação, e ver quantidade de votos.. 

Então é isso, boa sorte.`)
break

case 'duelo_v1':
if(!isGroup) return reply(Res_SoGrupo)  
if(!fs.existsSync(`./func/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
dl_JsOn = JSON.parse(fs.readFileSync(`./func/duelo_${from}.json`))
if(JSON.stringify(dl_JsOn).includes(sender)) return reply("Você já votou, não pode votar novamente.. / ou você está participando do duelo, não pode votar..")
dl_JsOn.voto_usu1.push(sender)
fs.writeFileSync(`./func/duelo_${from}.json`, JSON.stringify(dl_JsOn, null, 2))
reply("Votou com sucesso, aguarde o restante votar, para eu anunciar o vencedor..")
break

case 'duelo_v2':
if(!isGroup) return reply(Res_SoGrupo)  
if(!fs.existsSync(`./func/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
dl_JsOn = JSON.parse(fs.readFileSync(`./func/duelo_${from}.json`))
if(JSON.stringify(dl_JsOn).includes(sender)) return reply("Você já votou, não pode votar novamente.. / ou você está participando do duelo, não pode votar..")
dl_JsOn.voto_usu2.push(sender)
fs.writeFileSync(`./func/duelo_${from}.json`, JSON.stringify(dl_JsOn, null, 2))
reply("Votou com sucesso, aguarde o restante votar, para eu anunciar o vencedor..")
break

case 'zerar_duelo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Apenas administrador..")
if(!fs.existsSync(`./func/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
DLT_FL(`./func/duelo_${from}.json`)
reply("Duelo resetado / cancelado..")
break

case 'terminar_vot_duelo':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Apenas administrador..")
if(!fs.existsSync(`./func/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
dl_JsOn = JSON.parse(fs.readFileSync(`./func/duelo_${from}.json`))
if(dl_JsOn.voto_usu1.length == dl_JsOn.voto_usu2.length) return reply("Não foi possível terminar a votação, pois está empate, não tem como eu anunciar um vencedor..")
blu_1 = ""
for( i of dl_JsOn.voto_usu1) {blu_1 += `${i.split("@")[0]}\n`}
blu_2 = ""
for( i of dl_JsOn.voto_usu2) {blu_2 += `${i.split("@")[0]}\n`}
var blak = `[ Ganhador: @${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]} ]\n\nUsuário _- 1 - @${dl_JsOn.usu1.split("@")[0]}\n\nQuantidade de votos: ${dl_JsOn.voto_usu1.length}\n\nPessoas que votou:\n${blu_1}\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\nUsuário _- 2 - @${dl_JsOn.usu2.split("@")[0]}\n\nQuantidade de votos: ${dl_JsOn.voto_usu2.length}\n\nPessoas que votou:\n${blu_2}`
try {pfimg = await conn.profilePictureUrl(`${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}@c.us`, 'image')} catch {pfimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'};
bl1 = await getBuffer(pfimg); bl_up = await upload(bl1)
blar = await getBuffer(`https://eruakorl.sirv.com/josival-aleatory/ganhador.jpg?text.0.text=${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}&text.0.position.gravity=center&text.0.position.y=22%25&text.0.size=62&text.0.color=000000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic`)
bli = await upload(blar)
conn.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/duelo_win/?url=${bl_up}&fundo=${bli}&nmr2=122&nmr2_2=175&nmr2_3=205&nmr2_4=205&largura=450&altura=672&apikey=`+API_KEY_ALEATORY}, caption: blak, mentions: [dl_JsOn.usu1, dl_JsOn.usu2]})
} catch {
reply("Erro, tente novamente..")
}
break

case 'duelo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Apenas administrador..")
try {
TXTEX = `Olá, para iniciar o duelo, você precisa marcar 2 pessoas, depois colocar / e o horario que vai começar a votação..\nExemplo: ${prefix+command} @fulano1 @fulano2/12:30\nColoquei para que ele acabe o duelo às 12:30 e vai ser enviado uma lista para votar..`
if(!menc_jid2 || menc_jid2?.length > 2) return reply(TXTEX)
if(!q.trim().includes("/")) return reply(TXTEX)
try {pfimg = await conn.profilePictureUrl(`${menc_jid2[0].split('@')[0]}@c.us`, 'image')} catch {pfimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'};
bl1 = await getBuffer(pfimg); bl_up = await upload(bl1)
try {pfimg2 = await conn.profilePictureUrl(`${menc_jid2[1].split('@')[0]}@c.us`, 'image')} catch {pfimg2 = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'}; 
bl2 = await getBuffer(pfimg2); bl_up2 = await upload(bl2)
gtb = await getBuffer(`https://eruakorl.sirv.com/josival-aleatory/vs.jpg?text.0.text=${menc_jid2[0].split("@")[0]}&text.0.position.gravity=southwest&text.0.position.x=6%25&text.0.position.y=-2%25&text.0.size=32&text.0.color=ff0000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=100&text.1.text=${menc_jid2[1].split("@")[0]}&text.1.position.x=-7%25&text.1.position.y=-2%25&text.1.size=32&text.1.color=0022ff&text.1.font.family=Source%20Serif%20Pro&text.1.font.weight=700&text.1.font.style=italic`); txtimg = await upload(gtb);
conn.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/duelo?url=${bl_up}&url2=${bl_up2}&fundo=${txtimg}&nmr1=595&nmr1_2=102&nmr1_3=157&nmr1_4=157&nmr2=117&nmr2_2=100&nmr2_3=150&nmr2_4=150&largura=870&altura=360&apikey=`+API_KEY_ALEATORY}, caption: `Duelo iniciado:\n\n@${menc_jid2[0].split("@")[0]}\n\t\t\t\t\t~ VS ~\n@${menc_jid2[1].split("@")[0]}\n\nNenhum usuário do grupo deve atrapalhar o duelo dos 2, quem enviar mensagem sem esta participando do duelo, estará descumprido as regras e poderá ser removido por um Administrador\n\nBoa sorte aos 2..`, mentions: menc_jid2}).catch(e => {reply("Erro")})
await sleep(1000)
fs.writeFileSync(`./func/duelo_${from}.json`, JSON.stringify({usu1: menc_jid2[0], usu2: menc_jid2[1], iniciar_vot: q.trim().split("/")[1], iniciou: false, voto_usu1: [], voto_usu2: []}, null, 2))
} catch {reply("Erro, tente novamente..")}
break

case 'play':
try {
if(!q) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=`+API_KEY_ALEATORY)
if(IS_sistemGold) {
if(QNTD_GOLDS < 3) return reply("Você não tem Golds suficiente para completar esta ação, tente novamente após conseguir mais...")
setTimeout(async() => {
await ConsumirGold(3, sender)
}, 1000)}
if(!botoes_) return reply(`Os botões estao desativado, mas para realizar o download de vídeo, utilize: ${prefix}play_video ${q.trim()} / ja se quiser realizar o download de áudio, utilizar: ${prefix}play_audio ${q.trim()}`);
if(data[0].tempo.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
bla = `
๖ۣ• Titulo: ${data[0].titulo}
๖ۣ• Tempo: ${data[0].tempo}
๖ۣ• Postado: ${data[0].postado}
๖ۣ• Descrição: ${data[0].desc}

■■■■■ 100% 

E᥉ᥴ᥆ᥣhᥲ ᥙ꧑ᥲ ᥆ρᥴᥲ᥆... 
`
EnvBotao(from, sender, conn, bla, NomeDoBot, "2|"+data[0].thumb, [`${prefix}play_audio ${data[0].url}`, `᭡ Aᥙdι᥆`, `${prefix}play_video ${data[0].url}`, `᭡ Vιdᥱ᥆`], info)
} catch (e) {
return reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break

case 'twitter':
if(!q.includes("twitter")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
if(!botoes_) return reply(`Os botões estao desativado, mas para realizar o download de vídeo, utilize: ${prefix}twitter_video ${q.trim()} / ja se quiser realizar o download de áudio, utilizar: ${prefix}twitter_audio ${q.trim()}`);
EnvBotao(from, sender, conn, "✔️ Download De Vídeo / Audio [ TWITTER ]\nEscolha uma opção que deseja baixar.", `☂️`, "2|0", [`${prefix}twitter_video ${q}`, `🎥 Video`, `${prefix}twitter_audio ${q}`, `🎵 Audio`], selo)
break 

case 'facebook':
if(!q) return reply(`Ops, insira o link`)
if(!botoes_) return reply(`Os botões estao desativado, mas para realizar o download de vídeo, utilize: ${prefix}play_video ${q.trim()} / ja se quiser realizar o download de áudio, utilizar: ${prefix}play_audio ${q.trim()}`);
EnvBotao(from, sender, conn, "✔️ Download De Vídeo / Audio [ FACEBOOK ]\nEscolha uma opção que deseja.", `☂️`, "2|0", [`${prefix}face_video ${q}`, `🎥 Video`, `${prefix}face_audio ${q}`, `🎵 Audio`], selo)
break 

case 'tiktok':
try {
if(!q.includes("tiktok")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
if(!botoes_) return reply(`Os botões estao desativado, mas para realizar o download de vídeo, utilize: ${prefix}tiktok_video ${q.trim()} / ja se quiser realizar o download de áudio, utilizar: ${prefix}tiktok_audio ${q.trim()}`);
EnvBotao(from, sender, conn, "✔️ Download De Vídeo / Audio [ TIKTOK ]\nEscolha uma opção que deseja.", `☂️`, "2|0", [`${prefix}tiktok_video ${q}`, `🎥 Video`, `${prefix}tiktok_video ${q}`, `🎵 Audio`], selo)
} catch (e) {
reply("Erro")
}
break 

case 'instagram':
case 'instadw':
if(!q.includes("instagram")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
if(!botoes_) return reply(`Os botões estao desativado, mas para realizar o download de vídeo, utilize: ${prefix}insta_video ${q.trim()} / ja se quiser realizar o download de áudio, utilizar: ${prefix}insta_audio ${q.trim()}`);
EnvBotao(from, sender, conn, "✔️ Download De Vídeo / Audio [ INSTAGRAM ]\nEscolha uma opção que deseja.", `☂️`, "2|0", [`${prefix}insta_video ${q}`, `🎥 Video`, `${prefix}insta_audio ${q}`, `🎵 Audio`], selo)
break 

// DOWNLOADS
case 'play_video':
case 'ytmp4':
try {
if(!q) return reply(`${prefix+command} link ou nome`);
reply("Realizando ação..");
conn.sendMessage(from, {video: {url:`https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;
case 'play_audio':
case 'ytmp3':
try {
if(!q) return reply(`${prefix+command} link ou nome`);
reply("Realizando ação..");
conn.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;
case 'tiktok_video':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply("Realizando ação..");
conn.sendMessage(from, {video: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;
case 'tiktok_audio':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply("Realizando ação..");
conn.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;
case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
conn.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply("Realizando ação..")
conn.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
conn.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4"}).catch(e => {
return reply(String(e))
})
} catch (e) {
return reply("Erro..")
}
break;
case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply("Realizando ação..")
conn.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'insta_video':
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}=&apikey=${API_KEY_ALEATORY}`)
reply("Realizando ação..")
if(ABC?.msg[0]?.url == undefined) {return reply(ABC?.msg)}
for ( i of ABC?.msg || []) {
if(i?.type == "mp4") {
conn.sendMessage(from, {video: {url: i.url}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} else if(i?.type == "jpg") {
conn.sendMessage(from, {image: {url: i.url}}, {quoted: info}).catch(e => {
return reply("Erro..");
})
}}
} catch (e) {
return reply("Erro..")
}
break;
case 'insta_audio':
try {
if(!q) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}=&apikey=${API_KEY_ALEATORY}`)
reply("Realizando ação..")
if(ABC?.msg[0]?.url == undefined) {return reply(ABC?.msg)}
for ( i of ABC?.msg || []) {
if(i?.type == "mp4") {
conn.sendMessage(from, {audio: {url: i.url}, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
return reply("Erro...")
})
} else if(i?.type == "jpg") {
conn.sendMessage(from, {image: {url: i.url}}, {quoted: info}).catch(e => {
return reply("Erro..");
})
}}
} catch (e) {
return reply("Erro..")
}
break;
case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/mediafire?url=${q}&apikey=`+API_KEY_ALEATORY)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
conn.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=${q}&apikey=`+API_KEY_ALEATORY)
conn.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
conn.sendMessage(anu[i], {text: txt})
}
reply(`Enviando com sucesso `)
}
break

case 'celular':
try {
if(!q) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply("Realizando ação..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/info_celular?celular=${q}&apikey=`+API_KEY_ALEATORY);
reply(`📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply("Erro...");
}
break;

case 'join': case 'entrar':
if(!SoDono) return reply(Res_SoDono)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('Já Esta ativo')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('Ja esta Desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('Ja esta ativo')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('Ja esta Desativado')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('Ja esta ativo')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('Ja esta Desativado')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('Já Esta ativo')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('Ja esta Desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('Ja esta ativo')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('Ja esta Desativado')
dataGp[0].antidoc = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('Ja esta ativo')
dataGp[0].antictt = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('Ja esta Desativado')
dataGp[0].antictt = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {														 
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antilinkgp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('Ja esta ativo')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('Ja esta Desativado')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('Ja esta ativo')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('Ja esta Desativado')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('Ja esta ativo')
dataGp[0].x9 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for Rebaixado ou promovido a adm 😏..')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('Ja esta Desativado')
dataGp[0].x9 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento..✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!SoDono) return reply(Res_SoDono)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('🌀 Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado 📝')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('‼️ Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

/*case 'antispam':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiSpam) return reply('Ja esta ativo')
dataGp[0].antispam = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de ANTI SPAM neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiSpam) return reply('Ja esta Desativado')
dataGp[0].antispam = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de ANTI SPAM neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break*/

case 'gold': case 'golds': case 'consultargold':
if(!IS_sistemGold) return reply(`Só é possível utilizar este comando ativando o sistema de Golds\nExemplo: ${prefix}sistemgold 1`)
if(!isGroup) return reply(Res_SoGrupo)
if(command == "consultargold") {
ConsultarGold(menc_os2)
} else {
ConsultarGold(sender)
}
break

case 'rankgold':
if(!isGroup) return reply(Res_SoGrupo)
galo = rggold[rggold.map(i => i.grupo).indexOf(from)].usus.map(i => i)
rank = galo.sort((a, b) => (a.Golds < b.Golds) ? 0 : -1)
ment = []

ble = `💰 *Rank de Golds* 💰\n`

for ( i = 0; i < 5; i++) {
  if(i != null) {
ble += `
┌───────────────
│ ${i + 1}º : @${rank[i].id.split('@')[0]}
│
│  Saldo: ${rank[i].Golds}
└────────────\n`
ment.push(rank[i].id)
}
}
mentions(ble, ment, true)

break

case 'addgold': case 'tirargold':
if(!SoDono) return reply(Res_SoDono)
if(!isGroup) return reply(Res_SoGrupo)
if(!menc_os2 && !Number(q) || menc_jid2[1]) return reply(`Marque a mensagem ou @ do usuário que deseja adicionar Golds Ou tirar..\n\nExemplo: Se for apenas tirar ou add marcando a mensagem\nUse: ${prefix}addgold 5\n\nSe for Tirar ou add usando @\nUse: ${prefix}addgold @marque 5`) 
var qp = q.replace(menc_jid2, "")
if(command == "addgold") {
AddGold(Number(qp), menc_os2)
} else if(command == "tirargold") {
TirarGold(Number(qp), menc_os2)
}
break

case 'sistemgold':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
hora130 = moment.tz('America/Sao_Paulo').format('HH:mm');
if(Number(args[0]) === 1) {
if(IS_sistemGold) return reply('Ja esta ativo')
dataGp[0].sistemGold = true
setGp(dataGp)
reply(`Sistema de Golds foi ativado com sucesso nesse grupo, As: ${hora130}`)
} else if(Number(args[0]) === 0) {
if(!IS_sistemGold) return reply('Ja esta Desativado')
dataGp[0].sistemGold = false
setGp(dataGp)
reply(`Para a infelicidade dos usuários o sistema de Golds foi Desativado nesse grupo, As: ${hora130}`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9visuunica':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('Ja esta ativo')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de revelar visu única neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('Ja esta Desativado')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de revelar visu única neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'so_adm':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply(' - Ativou com sucesso o recurso de só adm utilizar comandos neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('‼️ Desativou o recurso de Só ADM utiliar comandos neste grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'odelete':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply(Res_SoDono)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('Ja esta ativo')
nescessario.Odelete = true
setNes(nescessario)
reply('🌀 Ativou com sucesso o recurso de delete nos grupos 📝')
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply('Ja esta Desativado')
nescessario.Odelete = false
setNes(nescessario)
reply('‼️ Desativou com sucesso o recurso de delete nos grupos ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('Ja esta ativo')
dataGp[0].antifake = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('Ja esta Desativado')
dataGp[0].antifake = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'prefixos':
if(!isGroup) return reply(Res_SoGrupo)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
bla = `Lista de prefixos para uso do bot, no Grupo: ${groupName}\n\n`
for ( i of dataGp[0].prefixos) {
bla += `Prefixo: ${i}\n\n`
}
reply(bla)
break

case 'add_prefixo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} Adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'infomultiprefixo': case 'infomultiprefix': 
mention(`${tempo} @${sender.split("@")[0]}, Irei informar como funciona a função de multiplos prefixo.

Essa função é por grupo, feito em um, não será feito em todos.

Primeiramente, ativar ele com 

${prefix}multiprefixo usando primeira vez ele ativa, depois ele desativa... E assim vai em diante..

Contém os seguintes comandos:

${prefix}add_prefixo\n\n${prefix}tirar_prefixo\n\n${prefix}prefixos

Exemplo do primeiro comando >

${prefix}add_prefixo &

O & que usei como exemplo, vai passar a ser um prefixo oficial do grupo, então se usar ${prefix} ou & funcionará, pode adicionar quantos quiser.. 

E pra tirar vai fazer o seguinte\n${prefix}tirar_prefixo &

E pra verificar os prefixos que foi adicionado 

${prefix}prefixos

É isso, boa sorte...`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de multi prefixos neste grupo 📝')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de multi prefixos neste grupo✔️')
}
break

case 'antinotas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já Esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Ja esta Desativado')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!SoDono) return reply(Res_SoDono)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!SoDono) return reply(Res_SoDono)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'legendabv2':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de Documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(Res_SoDono)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(Res_SoDono)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break

case "crimg": case "superimg": case "imgcr": 
try {
reply("Realizando pedido..");
conn.sendMessage(from, {image: {url:`https://api.bronxyshost.com.br/api-bronxys/CRIAR_IMG_DA_SUA_IDEIA?q=${q.trim()}&apikey=${API_KEY_ALEATORY}`}}, {quoted: info}).catch(() => {return reply("Erro..")});
} catch {
return reply("Erro..");
}
break;

case 'pergunta': case 'openai': case 'gpt':
try {
reply("Aguarde, criando / pesquisando sobre o que esta perguntando ou pedindo.");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/PERGUNTE_E_EU_RESPONDO?q=${q.trim()}&apikey=${API_KEY_ALEATORY}`)
reply(ABC.msg)
} catch { 
reply("Erro..")
}
break;

case 'simi':
if(!isGroup) return reply(Res_SoGrupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo Simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo 😗..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo 😗..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autofigupv':
if(!SoDono) return reply("Apenas Dono.")
nescessario.figupv = !nescessario.figupv
await setNes(nescessario)
reply(nescessario.figupv ? "ATIVADO PARA FIGURINHAS AUTOMATICAS NO PTIVADO": "DESATIVADO O USO DE FIGURINHAS AUTOMATICAS NO PRIVADO.")
break;

case 'autorepo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de auto resposta neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de auto resposta neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isModobn) return reply('o modobrincadeira já está ativo')
dataGp[0].jogos = true
setGp(dataGp)
reply('🎯 Ativou com sucesso o recurso de Modo brincadeira neste grupo 🪀')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('o modobrincadeira já está Desativado')
dataGp[0].jogos = false
setGp(dataGp)
reply('🎯 Desativou com sucesso o recurso de Modo brincadeira neste grupo 🪀')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'patente':
case 'level':
if(!isGroup) return reply(Res_SoGrupo)
resul = `     
Olá Usuário -> @${sender.split("@")[0]}\n\n★彡[ ${tempo} ]彡★ Aqui está suas informações: 

- Patente : ${patente} 

- Level* : ${level_up}

- Grupo: ${groupName}`
conn.sendMessage(from, {text: resul, mentions: [sender]}, {quoted: info})
break

case 'leveling':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply(Res_SoDono)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo ja está banido`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(Res_SoDono)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está Desativado')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal : ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`🌀 O recurso limite de caracteres já está ativo no grupo 🌀`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`✔️ O recurso limite de caracteres foi ativado nesse grupo📝`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(Res_SoDono)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoAdm) // │➱ Anti Spam: ${isAntiSpam ? '✓' : '✕'}
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ Anti Imagem: ${isAntiImg ? '✓' : '✕'}
│➱ Anti Vídeo: ${isAntiVid ? '✓' : '✕'}
│➱ Anti Áudio: ${isAntiAudio? '✓' : '✕'}
│➱ Anti Sticker: ${isAntiSticker ? '✓' : '✕'}
│➱ Anti Documento: ${Antidoc ? '✓' : '✕'}
│➱ Anti Contato ${isAntiCtt ? '✓' : '✕'}
│➱ Anti Localização: ${Antiloc ? '✓' : '✕'}
│➱ Anti Link Grupo: ${isAntilinkgp ? '✓' : '✕'}
│➱ Anti Link Hard: ${isAntiLinkHard ? '✓' : '✕'}
│➱ Anti Fake: ${isAntifake ? '✓' : '✕'}
│➱ Anti Notas: ${isAntiNotas ? '✓' : '✕'}
│➱ Anti Catalogo: ${isAnticatalogo ? '✓' : '✕'}
│➱ Anti Palavrão: ${isPalavrao ? '✓' : '✕'}
│➱ Limite Caracteres: ${isAntiFlood ? '✓' : '✕'}
│➱ Bem Vindo 1: ${isWelkom ? '✓' : '✕'}
│➱ Bem Vindo 2: ${isWelkom2 ? '✓' : '✕'}
│➱ Simi 1: ${isSimi ? '✓' : '✕'}
│➱ Simi 2: ${isSimi2 ? '✓' : '✕'}
│➱ Auto Sticker: ${isAutofigu ? '✓' : '✕'}
│➱ Auto Resposta: ${isAutorepo ? '✓' : '✕'}
│➱ Modo Brincadeira: ${isModobn ? '✓' : '✕'}
│➱ Level ${isLevelingOn ? '✓' : '✕'}
│➱ Nsfw: ${isNsfw ? '✓' : '✕'}
│➱ Anti Ligação: ${isAnticall ? '✓' : '✕'}
│➱ Anti PV Block: ${isAntiPv ? '✓' : '✕'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`

EnvBotao(from, sender, conn, statuszada, "Leia com atenção", "1|"+logoslink.logo, [`${prefix}ativacoes`, `░ MENU DE ATIVAÇÕES ░`], selo)
break
//
case 'reiniciar':
if(!SoDono) return
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
var [emoji, nm] = q.split("/")
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/emoji?q=${emoji}/${nm?.toLowerCase()|| "whatsapp"}&apikey=`+API_KEY_ALEATORY)
sendStickerFromUrl(from, ABC.rst)
} catch {
return reply("Erro..")
}
break

case 'emoji-mix':
case 'emojimix':
var [emj1, emj2] = q.trim().split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 👿+😇`)
try {
reply(enviar.espere)
sendStickerFromUrl(from, `https://api.bronxyshost.com.br/api-bronxys/emojimix?emoj=${encodeURI(emj1)}&emoj2=${encodeURI(emj2)}&apikey=${API_KEY_ALEATORY}`)
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('*Ops não foi possivel fazer esse mix de emoji / Ou ocorreu algum problema no sistema..*')
}
}
break


case 'rbg':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
if(IS_sistemGold) {
setTimeout(async() => {
await ConsumirGold(2, sender)
}, 1000)
}
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'rbale':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `BOT`, `ISAC`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `TIU-BOT`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Erro, tenta mais tarde`); 
})
break

case 'rename':
case 'roubar':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply('*E o autor e o nome do pacote?*')
if(!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if(!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
if(IS_sistemGold) {
setTimeout(async() => {
await ConsumirGold(3, sender)
}, 1000)
}
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Erro, tenta mais tarde`); 
})
break

case 'fstiker':
case 'fsticker':
case 'f':
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
 var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`
 var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
reply(enviar.espere)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
 var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`
 var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
reply(enviar.espere)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'figu':
if(fs.existsSync(DF_TJ)) return reply("Aguarde um momento, e realize o pedido novamente, não seja tão rápido...")
var DF_TJ = "./datab/data/CVF.json"
fs.writeFileSync(DF_TJ, JSON.stringify([isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage || isQuotedVideo ?  info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage]))
var PUXJ = JSON.parse(fs.readFileSync(DF_TJ))
var DFN = PUXJ[0]
DFN.sticker = {url: DFN.url}
await delay(1200)
DLT_FL(DF_TJ)
conn.sendMessage(from, DFN)
break


case 's':
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
reply(enviar.espere)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `⚝ ⇝ Solicitado por:\n⚝ ⇝ Bot:\n⚝ ⇝ Dono:`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`
reply(enviar.espere)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
try {
reply(enviar.espere)
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('ERRO!!')
})
} catch {
reply("Erro..")
}
break

//=============(LOGOS)=============\\



//==========(PLAQUINHAS-LOGOS)===========\

case 'placaloli':
if(!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
break 

//=======================================\\

case 'logos1':
if(!q) return reply(`Exemplo: ${prefix+command} Aleatory`);
var LOGOS = ['shadow','metalgold','cup','txtborboleta','cemiterio','efeitoneon','harryp','lobometal','neon2','madeira','lovemsg3','coffecup','coffecup2','florwooden','narutologo','fire','romantic','smoke','papel','lovemsg','lovemsg2','fiction','3dstone','areia','style','blood','pink','cattxt','neondevil','carbon','metalfire','thunder','vidro','jokerlogo','transformer','demonfire','jeans','metalblue','natal','ossos','asfalto','break','glitch2','colaq','neon3','nuvem','horror','matrix','berry','luxury','lava','thunderv2','neongreen','neve','neon','neon1','neon3d','gelo','neon3','3dgold','lapis','toxic','demongreen','rainbow','halloween','angelwing','hackneon','fpsmascote','equipemascote','txtquadrinhos','ffavatar','mascotegame','angelglx','gizquadro','wingeffect','blackpink','metalgold','girlmascote','logogame'];
var ENV = [];
for(var a = 0; a < LOGOS.length; a++) {
ENV.push({title: LOGOS[a], description: `Logo personalizadas: ${a+1}`, rowId: prefix+LOGOS[a]+` ${q}`})}
EnvLista(from, `Texto: ${q}`, "Diversas logos", "Escolha a qual desejar", "Clique aqui..", "Logos top..", ENV);
break

// LOGOS 

case 'angelwing': case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'metalgold':
case 'girlmascote': case 'logogame':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("Realizando ação..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=`+API_KEY_ALEATORY);
conn.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'fiction': case '3dstone': case 'areia': case 'style': 
case 'blood': case 'pink': case 'cattxt': case 'neondevil':
case 'carbon': case 'metalfire': case 'thunder': case 'vidro': 
case 'jokerlogo': case 'transformer': case 'demonfire':
case 'jeans': case 'metalblue': case 'natal': case 'ossos':
case 'asfalto': case 'break': case 'glitch2': case 'colaq':
case 'neon3': case 'nuvem': case 'horror': case 'matrix':
case 'berry': case 'luxury': case 'lava': case 'thunderv2':
case 'neongreen': case 'neve': case 'neon': case 'neon1':  
case 'neon3d': case 'gelo': case 'neon3': case '3dgold':
case 'lapis': case 'toxic': case 'demongreen': case 'rainbow':
case 'halloween':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("Realizando ação..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos?texto=${q}&category=${command}&apikey=`+API_KEY_ALEATORY);
conn.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'shadow': case 'metalgold': case 'cup': 
case 'txtborboleta': case 'cemiterio': case 'efeitoneon':
case 'harryp': case 'lobometal': case 'neon2':
case 'madeira': case 'lovemsg3': case 'coffecup':
case 'coffecup2': case 'florwooden': case 'narutologo':
case 'fire': case 'romantic': case 'smoke':  
case 'papel': case 'lovemsg': case 'lovemsg2':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("Realizando ação..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=`+API_KEY_ALEATORY);
conn.sendMessage(from, {image: {url: ABC.resultado.imageUrl}}, {quoted: info}).catch((e) => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'marvel': case 'pornhub': case 'space': case 'stone':
case 'steel': case 'grafity': case 'glitch3': case 'america':
try {
var [DG, DG2] = q.split("|")
if(!q.includes("|")) return reply(`Exemplo: ${prefix+command} Bronxys|Aleatory`)
reply("Realizando ação..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_2?texto=${DG}&texto2=${DG2}&category=${command}&apikey=`+API_KEY_ALEATORY);
conn.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'metadinha':
try {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/metadinha?apikey=`+API_KEY_ALEATORY);
conn.sendMessage(from, {image: {url: ABC.link1}}).catch(() => {
return reply("Erro..")
})
conn.sendMessage(from, {image: {url: ABC.link2}}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'googlesg':
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${API_KEY_ALEATORY}`)
conn.sendMessage(from, {image: {url: bla.resultado.imageUrl}}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'infosorteio':
case 'helpsorteio':  
conn.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
break

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
conn.sendMessage(from, {text:'Substituido com sucesso..'},{quoted: info})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(Res_SoDono)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
conn.sendMessage(from, {text:'Pronto novinha..'},{quoted: info})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'bann':
if(!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido ou saiu do grupo.")
if(premium.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "remove")  
break

case 'band':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify().includes(menc_os2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'promover': 
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi Rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'sorteio':
if(!isGroupAdmins) return reply(Res_SoAdm)
try{
if(!isGroup) return reply(Res_SoGrupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(info.key.fromMe) return 
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
conn.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply(Res_SoAdm)
try{
if(!isGroup) return reply(Res_SoGrupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

//==========(TTPS/ATTP)============\\

case 'attp': case 'ttp':
try {
if(!q) return reply(`Exemplo: ${prefix+command} bronxys`);
reply("Realizando ação..");
conn.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?texto=${q}&apikey=`+API_KEY_ALEATORY}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if(args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
conn.sendMessage(from, {sticker: {url:`http://api.brizaloka-api.tk/ttp/attp2?apikey=brizaloka&text=${encodeURI(q)}`}}, {quoted: info})
} catch {
reply('ERROR')
}
break


//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'gerarnick': case 'fazernick':
try {
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letras modificadas nem emoji..");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas, Exemplo: ${prefix+command} bronxys`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gerar_nick?nick=${q}&apikey=`+API_KEY_ALEATORY)
AB = `Lista com base no Nick informado, para encontrar melhor fonte para utilizar:\n\n`;
for ( i of ABC) {
AB += `${i}\n\n`;
}
reply(AB);
} catch (e) {
return reply("Erro..");
}
break;

case 'chance':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
var avb = body.slice(7)
if(args.length < 1) return conn.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
conn.sendMessage(from, {text: hasil, mentions: [sender]}, {quoted: info})
break

case 'nazista':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de nazista : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgnazista}, caption: `O quanto você é nazista? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  nazista 卐`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gay':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 41 ) {var bo = 'você é né?😏'} else if(boiola == 42 ) {var bo = 'você é né?😏'} else if(boiola == 43 ) {var bo = 'você é né?😏'} else if(boiola == 44 ) {var bo = 'você é né?😏'} else if(boiola == 45 ) {var bo = 'você é né?😏'} else if(boiola == 46 ) {var bo = 'você é né?😏'} else if(boiola == 47 ) {var bo = 'você é né?😏'} else if(boiola == 4 ) {var bo = 'você é né?😏'} else if(boiola == 49 ) {var bo = 'você é né?😏'} else if(boiola == 50 ) {var bo = 'você é ou não?🧐'} else if(boiola > 51) {var bo = 'você é gay🙈'
}
conn.sendMessage(from, {image: {url: imggay}, caption: `  O quanto você é gay? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: info})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de feio : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'Ainda tá na média'} else if(feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'Feiooo'} else if(feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if(feio > 51) {var bo = 'você é Feio demais 🙈'} 

conn.sendMessage(from, {image: {url: imgfeio}, caption: `  O quanto você é feio? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: info})
}, 7000)
break 

case 'corno':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text:` ❰ Pesquisando a ficha de corno : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgcorno}, caption: ` O quanto você é corno? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno 🐃`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto você é vesgo? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${sender_ou_n.split("@")[0]} , aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgbebado}, caption:`O quanto você é bebado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text:`❰ Pesquisando a ficha de gado : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imggado}, caption: `O quanto você é gado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto você é gostoso? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostoso 😝`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
conn.sendMessage(from, {text:`❰ Pesquisando a sua ficha de gostosa : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto você é gostosa? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break

case 'matar':
case 'mata':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
conn.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: info})
break 


case 'beijo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
conn.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: info})
break

case 'biografia':
try {
var status = await conn.fetchStatus(marc_tds)  
} catch {
var status = "Privado ou inexistente. "
}
reply(status)
break

case 'tapa':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um tapa, a mensagem ou o @')
conn.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você Acabou de da um tapa na raba da😏 @${menc_os2.split('@')[0]} 🔥`, mentions: [menc_os2]}, {quoted: info})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
conn.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você Acabou de da um chute em @${menc_os2.split('@')[0]} 🤡`, mentions: [menc_os2]}, {quoted: info})
break 

case 'dogolpe':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
random = `${Math.floor(Math.random() * 100)}`
conn.sendMessage(from, {text:`*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *@${menc_os2.split("@")[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`, mentions: [menc_os2]})
break

case 'shipo':
if(!menc_jid2) return reply('Marque uma pessoa do grupo para encontrar o par dela')
mention(`*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n && 2 = ${menc_jid2.split("@")[0]} com uma porcentagem de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'casal':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
mention(`*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ne esse\n2= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ncom uma porcentagem de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'ranklevel':
case 'rankpatente':
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages + a.figus) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages + b.figus)) ? 0 : -1)
menc = [] 
blad = `
┌───────────────┐
│  RANK DE LEVEL & PATENTES\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
var i5 = patentes.map(i => i.grupoID).indexOf(from)
var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
if (i != null) blad += `
┌───────────────
│ ${i + 1}º : @${blue[i].id.split('@')[0]}
└─────
   ༶ Level: ${patentes[i5].usus[i6].level_usu}\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}\n   ༶ Conectado em: ${blue[i].aparelho}\n└────────────\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankativos': 
case 'rankativo':   
if(!isGroup) return reply(Res_SoGrupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `
┌────────────────┐
│ RANK DE MAIS ATIVOS DO GRUPO\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
var i5 = patentes.map(i => i.grupoID).indexOf(from)
var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
if (i != null) blad += `
┌───────────────
│ ${i + 1}º : @${blue[i].id.split('@')[0]}
└─────
   ༶ Mensagens: ${blue[i].messages}\n   ༶ Comandos dados: ${blue[i].cmd_messages}${i6 < 0 ? "" :`\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}`}\n   ༶ Conectado em: ${blue[i].aparelho}\n   ༶ Figurinhas: ${blue[i].figus}\n└────────────\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = 'Rank dos mais Ghosts do Grupo:\n\n'
if(bule.length == 0)boardi += 'Sem Ghosts'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\nMensagens: ${bule[i].messages}\nComandos dados: ${bule[i].cmd_messages}\nAparelho: ${bule[i].aparelho}\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if(!isGroup) return reply(Res_SoGrupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${menc_os2.split('@')[0]} no grupo: ${groupName}\n𖣘⃟ᗒ Mensagens: ${RSM_CN.messages}\n𖣘⃟ᗒ Comandos dados: ${RSM_CN.cmd_messages}\n𖣘⃟ᗒ Conectado em: ${RSM_CN.aparelho}\n𖣘⃟   Figurinhas: ${RSM_CN.figus}`, [menc_os2], true)
} else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${menc_os2.split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, [menc_os2], true)
}
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*🤖RANK DOS 5 MAIS GAYS DO GRUPO [ ${groupName} ]🏳‍🌈*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS CORNO DO GRUPO 🐂\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkcorno);
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS GOSTOSOS DO GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DAS 5 MAIS GOSTOSAS DO GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgostosa);
break;

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n\n`
TMPAU = ["Pequeno pra cact, se mata maluco 🥴", `Pequenininho chega ser até fofo 🥺`, `Menor que meu dedo mindinho pequeno demais 😑`, `Até que dá sentir, tá na média 😌`, `Grandinho 🥵`, `Grande até `, `Gigantesco igual meu braço 😖`, `Enorme quase chega no útero 🤧`, `Grandão demais em, e uii 🤯`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal 😳"]
for (var i = 0; i < 5; i++) {
ABC += `${TMPAU[Math.floor(Math.random() * TMPAU.length)]} _- @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'jogodavelha':
if(!isGroup) return reply(Res_SoGrupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Vitória do jogador"
}
if(vit == "derrota") {
var tes = "A vitória é do BOT"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
break

case 'cassino':
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}

const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
  
EnvBotao(from, sender, conn, cassino, Vitória, "1|0", [`${prefix}cassino`, `Proximo`], selo)
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bosxdt':
const soundft = fs.readFileSync('datab/audios/qviado.mp3')
conn.sendMessage(from, {audio: soundft, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'infobsdcfot':
const cmdoo = fs.readFileSync('datab/audios/infobot.mp3')
conn.sendMessage(from, {audio: cmdoo, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
a = await webp_mp4(buff)
conn.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: info}).catch(e => {
reply("Erro..")
})
DLT_FL(buff)
}
} catch {
reply("Erro..")
}
break

case 'lixo': case 'lgbt': case 'morto': case 'preso': case 'deletem':
case 'procurado': case 'hitler': case 'borrar': case 'merda':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
conn.sendMessage(from, {image: {url:`https://api.bronxyshost.com.br/api-bronxys/montagem?url=${link}&category=${command}&apikey=${API_KEY_ALEATORY}`}}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'comporn':
try {
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
conn.sendMessage(from, {image: {url:`https://api.bronxyshost.com.br/api-bronxys/phub?nome=${jrr}&msg=${jrr1}&foto=https://telegra.ph/file/954832554bf2b2e40f932.jpg&apikey=`+API_KEY_ALEATORY}}, {quoted: info})
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break 

case 'legenda':
try {
var [txt1, txt2] = q.split("/")
if(!q.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
conn.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/legenda?url=${res}&texto1=${txt1}&texto2=${txt2}&apikey=`+API_KEY_ALEATORY}}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} else {
reply('Marque uma imagem...!')
}
} catch (e) {
return reply('ERROR!!')
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
EnvBotao(nmrdn,`✔️ Convite para entrar em um Grupo\n\nLink : ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `☂️`, "1|0", [`${prefix}entrar ${cnvt}`, `Aceitar`, `${prefix}recusar ${sender}`, `Recusar`], selo)
break

case 'recusar':
if(!SoDono) return reply(Res_SoDono)
conn.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join': case 'entrar':
if(!SoDono) return reply(Res_SoDono)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break
//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: `Uma dessas opções estão ativada, mas por você ser ADM, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)`}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
conn.sendMessage(from, {text: 'reporte aos adm o ocorrido ', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply('Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.')
console.log(colors.red('Deram Spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
conn.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mp4", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
conn.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mp4", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
conn.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./armor/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: info})
DLT_FL(rano)
})
})
}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

EnvAudio2_GTTS("pt", `São ${hora_sla} da ${tempo.split(" ")[1]}`, "que horas sao?")

EnvTXT_SMP(prefix, "prefixo")

if(isAutorepo) {

if(budy2 === "bot") {
blars = ["Vontade de ter comer safada.", "Fala comigo vadia.", "Nem queria está aqui, mas fala o que você quer filho de uma kenga."] 
blarnd = blars[Math.floor(Math.random() * blars.length)]
reply(blarnd)  
}
 
if(budy2.includes("bk,")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
conn.sendMessage(from, {text: adivinha}, {quoted: info})
}

EnvAudio2_SMP("./datab/audios/corno.mp3", "corno")

}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.indexOf(PR_String) >= 0) {
 if(!isGroupAdmins) {
 conn.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : info})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
setTimeout( () => {
conn.sendMessage(from, {text: `*「 - REMOVIDO POR UTILIZAR UMA PALAVRA PROIBIDA - 」*\nVocê será banido do gp, Na proxima veja as regras ao digitar qualquer palavra..!!`}, {quoted : info}).catch(e => {
conn.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : info})
})       							
}, 200)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isCmd) {
uptime = process.uptime() 
conn.sendMessage(from, {text: `
┌╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶
├ ${tempo} @${sender.split("@")[0]}
├ Comando: ${budy} não encontrado.
├ Digite: ${prefix}menu
├ Leia os menus com atenção.
└╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶
`, mentions: [sender]}, {quoted: selo}) 
}
//========================================\\
}
}
}
msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./iniciar.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})
}
}
}
startAle().catch(e => {
return console.log(e+" -INDEX..ERROS")
})