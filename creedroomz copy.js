
require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const fs = require('file-system')
//chromium-firefox-webkit
const {chromium} = require('playwright')
const delay = require('delay')
const color = require('colors-cli/safe')
//nodemon -x 'node index.js || copy /b index.js +,,'
//nodemon -x 'node creedroomz.js || copy /b creedroomz.js +,,'
//nodemon -x 'node main.js || copy /b main.js +,,'
const url = "https://www.seubet.com/";
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const bot = new Telegraf(process.env.BOT_TOKEN)

    global.num1 = -1
    global.num2 = -1
    global.num3 = -1
    global.num4 = -1
    global.NEWnum1 = -1
    global.NEWnum2 = -1
    global.NEWnum3 = -1
    global.NEWnum4 = -1

    global.num1BACKUP = -3
    global.num2BACKUP = -3
    global.num3BACKUP = -3
    global.num4BACKUP = -3

    global.roletaAndamento = false
    global.andamento = true
    global.column1 = 0;
    global.column2 = 0;
    global.column3 = 0;
    
    //global.gale = 7

    global.vitoria = 0 
    global.loss = 0
    const sequence = color.green;
    const red = color.red_b;
    const protecao = color.yellow_b
    const recuon = color.red_bt;
    const recuoff = color.green_bt;

    global.numRed = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    global.numBlack = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]

    global.coluna1 = [1,4,7,10,13,16,19,22,25,28,31,34]
    global.coluna2 = [2,5,8,11,14,17,20,23,26,29,32,35]
    global.coluna3 = [3,6,9,12,15,18,21,24,27,30,33,36]

    global.waveDown = [1,4,2,5,8,11,9,12,13,16,14,17,20,23,21,24,25,28,26,29,32,35,33,36]
    global.waveUp = [2,5,3,6,7,10,8,11,14,17,15,18,19,22,20,23,26,29,27,30,31,34,32,35]
    global.waveResetDown = false
    global.waveResetUp = false
    global.repeatColunReset = false

    global.vzdozero =  [0,2,3,4,7,12,15,18,21,19,22,25,28,26,29,32,35]
    global.terminal0 = [0,10,20,30]
    global.terminal1 = [1,11,21,31]
    global.terminal2 = [2,12,22,32]
    global.terminal3 = [3,13,23,33]
    global.terminal4 = [4,14,24,34]
    global.terminal5 = [5,15,25,35]
    global.terminal6 = [6,16,26,36]
    global.terminal7 = [7,17,27]
    global.terminal8 = [8,18,28]
    global.terminal9 = [9,19,29]

//                      0       1     2     3       4       5       6     7  8     9    10   11    12  13 14   15   16  17  18  19  20  21  22  23  24 25
    global.roleta1 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,true,true,false,1,true,true,false,1,  0,  0,  0,true, 0, 0,  0, 0]
    global.roleta4 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0, 0]
    global.roleta6 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0, 0]
    global.roleta7 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0, 0]
    global.roleta9 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0, 0]
    global.roleta10 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0, 0]
    global.roleta11 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0, 0]
    global.roleta13 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0, 0]
    global.roleta15 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0, 0]

    global.contcoluna1 = 0
    global.contcoluna2 = 0
    global.contcoluna3 = 0

    global.lobbyCrash = false; 
    global.recuperacao = false;
    global.recuperacaoGALE = 0
    global.galeTeste = 1

    global.columnGALEHORA = 0
    global.win = 0
    global.loss = 0
    global.roleta = "https://www.seubet.com/cassino-ao-vivo/slots/all/28/creedroomz/20000-400040312-aurum-roulette?provider=all&mode=real"

    global.browserAtivo = false
    global.chatID
    global.ultimaMSN = 0
    

const users = ["bauerthalison"]


bot.on(message("text"), async(ctx) =>{
    await criarArquivo()
    const caminhoArquivo = arquivo
    await atualizaDerrotas()
    await atualizaVitorias()
    if(ctx.message.text === "/iniciar"){
        if(users.includes(ctx.message.from.username)){
            if(browserAtivo === false){
                console.log(ctx.message.from.username+" CADASTRADO")
                var userNAME = logar(process.env.EMAIL,process.env.PASSWORD)
                var userID = ctx.message.from.id
                chatID = ctx.chat.id
                //console.log(chatID)

                ctx.reply("✅ Roletta Iniciada!")
            }else{
                console.log("🎰PROGRAMA JÁ ESTA OPERANDO")
            }
            
        }else{
            ctx.reply("USUARIO NÃO CADASTRADO")
            console.log("USUARIO NAO CADASTRADO")
        }
        
    }

    if(ctx.message.text === "/parar"){
        console.log(browserAtivo)
        if(browserAtivo === true){
            ctx.reply("❌ Roletta Pausada!")
            await fecharBrowser()
        }
    }
    if(ctx.message.text === "/resumo"){
        ctx.reply('🤑 Placar o dia ✅ '+win+' ❌ '+loss+' \n💰 xx Greens seguidos!!')
    }

    if(ctx.message.text === "/config"){
        let n1 = process.env.GALE_DUZIA -2
        ctx.reply('⚠️ '+n1+' Protecões\n💰  R$ 10 na entrada\n🟩 Stop WIN R$ '+process.env.STOPWIN+'\n🟥 Stop LOSS R$ '+process.env.STOPLOSS+'')
    }
  
    async function entradaConfirmadaBOT(text) {
        ultimaMSN = await bot.telegram.sendMessage(chatID,text)
        //console.log(ultimaMSN)

    }

    async function editarSinal(nameR,gale){
        //await ctx.editMessageText(ultimaMSN.message_id, null, null, );
        switch (gale) {
            case 1:
                await ctx.telegram.editMessageText(
                    ultimaMSN.chat.id,
                    ultimaMSN.message_id,
                    null, // InlineMessageId, se aplicável
                    "🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum2+" ultimo número]\n["+NEWnum1+" ✅]"
                );
            break;
            case 2:
                await ctx.telegram.editMessageText(
                    ultimaMSN.chat.id,
                    ultimaMSN.message_id,
                    null, // InlineMessageId, se aplicável
                    "🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum3+" ultimo número]\n["+NEWnum2+"]["+NEWnum1+"✅]"
                );
            break;
            case 3:
                await ctx.telegram.editMessageText(
                    ultimaMSN.chat.id,
                    ultimaMSN.message_id,
                    null, // InlineMessageId, se aplicável
                    "🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum4+" ultimo número]\n["+NEWnum3+"]["+NEWnum2+"]["+NEWnum1+"✅]"
                );
                texto = toString()
            break;
            case 4:
                await ctx.telegram.editMessageText(
                    ultimaMSN.chat.id,
                    ultimaMSN.message_id,
                    null, // InlineMessageId, se aplicável
                    "🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum4+" ultimo número]\n[❌ LOSS ❌]"
                );
            break;
        }
    }
    
    

    console.log('🎰 PROGRAMA ATIVO')


    async function logar(userlogin,userpass) {
        //await page.pause()
        try {
            global.browser = await chromium.launch({headless: false});
            global.page = await browser.newPage() 
            browserAtivo = true
            await page.goto(url, timeout = 0);
            await delay(10000)
            await page.getByRole('button', { name: 'Entrar' }).click();
            await page.getByPlaceholder('Informe seu usuário').click();
            await page.getByPlaceholder('Informe seu usuário').fill(userlogin);
            await page.getByPlaceholder('Informe sua senha').fill(userpass);
            await page.getByRole('dialog').getByRole('button', { name: 'Entrar' }).click();
            await delay(10000)
            await page.goto(roleta)
            await delay(10000)
        } catch (error) {
            
        }
    
    setInterval(async () => {
        if(columnGALEHORA > process.env.COLUMN_JGHORA){
            columnGALEHORA = 0
            console.log("REINICIANDO 50MIN")
        }
    },3000000) 

    setInterval(async () => {
        if(roletaAndamento === false && lobbyCrash === true){
            await analisandoLobby()
        } 
    },6000)

    setInterval(async () => {
            if(roleta1[0] === num1BACKUP && roleta1[1] === num2BACKUP && roleta1[2] === num3BACKUP){
                //console.log("ROLETA TRAVADA")
                await incrementarLOG("ROLETA TRAVADA")
                ausente()
            }else if(isNaN(num1BACKUP) && isNaN(num2BACKUP) && isNaN(num3BACKUP)){
                //console.log("ROLETA TRAVADA isNAN")
                await incrementarLOG("ROLETA TRAVADA isNAN")
                ausente()
            }else if(num1BACKUP === "NaN" && num2BACKUP === "NaN" && num3BACKUP === "NaN" ){
                //console.log("ROLETA TRAVADA NAN")
                await incrementarLOG("ROLETA TRAVADA NAN")
                ausente()
            }else{
                //console.log("ROLETA EM OPERAÇÃO")
                num1BACKUP = roleta1[0]
                num2BACKUP = roleta1[1]
                num3BACKUP = roleta1[2]
                //console.log(roleta1[0],num1BACKUP,roleta1[1],num2BACKUP,roleta1[2],num3BACKUP,apostando)
            }
    },600000)

    await delay(6000) 
    await irLobby()
    }
    async function criarArquivo() {
        const hoje = new Date();
        const dia = hoje.getDate();
        const mes = hoje.getMonth() + 1; 
        const ano = hoje.getFullYear();

        global.arquivo = "./logs/"+dia+"-"+mes+"-"+ano+".txt"
        global.arquivoLOG = "./logs/"+dia+"-"+mes+"-"+ano+"LOG.txt"
        if (!fs.existsSync(arquivo)) {
            fs.writeFileSync(arquivo, 'WINNER: 0\nLOSS: 0', 'utf8');
            console.log('Arquivo criado com sucesso!');
        }
        if (!fs.existsSync(arquivoLOG)) {
            fs.writeFileSync(arquivoLOG,'','utf8');
            console.log('Arquivo criado com sucesso!');
        }

    }
    async function atualizaVitorias() {
        fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
        
            // Use uma expressão regular para encontrar o valor do campo WINNER
            const regex = /WINNER:\s*(\w+)/;
            const match = data.match(regex);
        
            if (match && match[1]) {
                const winner = match[1];
                win = winner
                //console.log('WINNER:', winner);
            } else {
                //console.log('Campo WINNER não encontrado no arquivo.');
            }
        });
    }
    async function atualizaDerrotas() {
        fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
        
            // Use uma expressão regular para encontrar o valor do campo WINNER
            const regex = /LOSS:\s*(\w+)/;
            const match = data.match(regex);
        
            if (match && match[1]) {
                const derrotas = match[1];
                loss = derrotas
                //console.log('LOSS:', derrotas);
            } else {
                //console.log('Campo LOSS não encontrado no arquivo.');
            }
        });
    }
    async function incrementarVitorias() {
        await criarArquivo()
        fs.readFile(arquivo, 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
    
            let vitorias = 0;
    
            // Verifica se o arquivo contém a linha de vitórias e extrai o valor atual
            if (data.includes('WINNER:')) {
                const regex = /WINNER: (\d+)/;
                const match = data.match(regex);
                if (match) {
                    vitorias = parseInt(match[1]);
                }
            }
    
            // Incrementa o número de vitórias
            vitorias++;
            win = vitorias
            // Substitui a linha de vitórias com o novo valor
            data = data.replace(/WINNER: \d+/, `WINNER: ${vitorias}`);
    
            // Escreve as linhas atualizadas de volta no arquivo
            fs.writeFile(arquivo, data, (err) => {
                if (err) {
                    console.error('Erro ao escrever no arquivo:', err);
                    return;
                }
                //console.log('Vitória incrementada com sucesso!');
            });
        });
    }
    async function incrementarDerrotas() {
        await criarArquivo()
        fs.readFile(arquivo, 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
    
            let derrotas = 0;
    
            // Verifica se o arquivo contém a linha de derrotas e extrai o valor atual
            if (data.includes('LOSS:')) {
                const regex = /LOSS: (\d+)/;
                const match = data.match(regex);
                if (match) {
                    derrotas = parseInt(match[1]);
                }
            }
    
            // Incrementa o número de derrotas
            derrotas++;
            loss = derrotas
            // Substitui a linha de derrotas com o novo valor
            data = data.replace(/LOSS: \d+/, `LOSS: ${derrotas}`);
    
            // Escreve as linhas atualizadas de volta no arquivo
            fs.writeFile(arquivo, data, (err) => {
                if (err) {
                    console.error('Erro ao escrever no arquivo:', err);
                    return;
                }
                //console.log('Derrota incrementada com sucesso!');
            });
        });
    }
    async function incrementarLOG(content) {
        await criarArquivo()
        try{
            content = content+"\n"
            fs.writeFile(arquivoLOG, content, { flag: 'a+' }, err => {});
        } catch (err) {
        }
    }
    async function resetTypes(type){
        switch (type) {
            case 1:
                if(waveResetDown === true){
                    console.log("RESETANDO WAVEDOWN - 30MIN")
                    roleta1[10] = true
                    roleta4[10] = false
                    roleta6[10] = false
                    roleta7[10] = false
                    roleta9[10] = false
                    roleta10[10] = false
                    roleta11[10] = false
                    roleta13[10] = false
                    roleta15[10] = false
                    waveResetDown = false
                }
            break;
            case 2:
                if(waveResetUp === true){
                    console.log("RESETANDO WAVEUP - 30MIN")
                    roleta1[14] = true
                    roleta4[14] = false
                    roleta6[14] = false
                    roleta7[14] = false
                    roleta9[14] = false
                    roleta10[14] = false
                    roleta11[14] = false
                    roleta13[14] = false
                    roleta15[14] = false
                    waveResetUp = false
                }
            break;
            case 3:
                if(repeatColunReset === true){
                    console.log("RESETANDO REPETIÇÃO COLUNA - 30MIN")
                    roleta1[21] = true
                    roleta4[21] = false
                    roleta6[21] = false
                    roleta7[21] = false
                    roleta9[21] = false
                    roleta10[21] = false
                    roleta11[21] = false
                    roleta13[21] = false
                    roleta15[21] = false
                    repeatColunReset = false
                }
            break;
        }
    }
    async function reset(){
        lobbyCrash = false;
        num1 = -1
        num2 = -1
        num3 = -1
        num4 = -1

        roleta1[4]  = 0
        roleta1[5]  = 0
        roleta1[6]  = 0

        roleta4[4]  = 0
        roleta4[5]  = 0
        roleta4[6]  = 0

        roleta6[4]  = 0
        roleta6[5]  = 0
        roleta6[6]  = 0

        roleta7[4]  = 0
        roleta7[5]  = 0
        roleta7[6]  = 0

        roleta9[4]  = 0
        roleta9[5]  = 0
        roleta9[6]  = 0

        roleta10[4]  = 0
        roleta10[5]  = 0
        roleta10[6]  = 0

        roleta11[4]  = 0
        roleta11[5]  = 0
        roleta11[6]  = 0

        roleta13[4]  = 0
        roleta13[5]  = 0
        roleta13[6]  = 0

        roleta15[4]  = 0
        roleta15[5]  = 0
        roleta15[6]  = 0

        //INDEX GALE
        roleta1[7] = 1
        roleta4[7] = 1
        roleta6[7] = 1
        roleta7[7] = 1
        roleta9[7] = 1
        roleta10[7] = 1
        roleta11[7] = 1
        roleta13[7] = 1
        roleta15[7] = 1
        
        //PRIMEIRA JOGADA
        roleta1[8] = true
        roleta4[8] = true
        roleta6[8] = true
        roleta7[8] = true
        roleta9[8] = true
        roleta10[8] = true
        roleta11[8] = true
        roleta13[8] = true
        roleta15[8] = true
    //SINAL APOSTA PARA ENTRAR ROLETA
        roleta1[9] = false
        roleta4[9] = false
        roleta6[9] = false
        roleta7[9] = false
        roleta9[9] = false
        roleta10[9] = false
        roleta11[9] = false
        roleta13[9] = false
        roleta15[9] = false

        //INDEX GALE
        roleta1[13] = 1
        roleta4[13] = 1
        roleta6[13] = 1
        roleta7[13] = 1
        roleta9[13] = 1
        roleta10[13] = 1
        roleta11[13] = 1
        roleta13[13] = 1
        roleta15[13] = 1
    //INDEX GALE
        roleta1[17] = 1
        roleta4[17] = 1
        roleta6[17] = 1
        roleta7[17] = 1
        roleta9[17] = 1
        roleta10[17] = 1
        roleta11[17] = 1
        roleta13[17] = 1
        roleta15[17] = 1
        //----- 
        roleta1[18] = 0
        roleta4[18] = 0
        roleta6[18] = 0
        roleta7[18] = 0
        roleta9[18] = 0
        roleta10[18] = 0
        roleta11[18] = 0
        roleta13[18] = 0
        roleta15[18] = 0

        roleta1[19] = 0
        roleta4[19] = 0
        roleta6[19] = 0
        roleta7[19] = 0
        roleta9[19] = 0
        roleta10[19] = 0
        roleta11[19] = 0
        roleta13[19] = 0
        roleta15[19] = 0

        //------------- VIZINHO ZERO
        roleta1[22] = 0
        roleta4[22] = 0
        roleta6[22] = 0
        roleta7[22] = 0
        roleta9[22] = 0
        roleta10[22] = 0
        roleta11[22] = 0
        roleta13[22] = 0
        roleta15[22] = 0

        roleta1[23] = 0
        roleta4[23] = 0
        roleta6[23] = 0
        roleta7[23] = 0
        roleta9[23] = 0
        roleta10[23] = 0
        roleta11[23] = 0
        roleta13[23] = 0
        roleta15[23] = 0
        //-------------QTD JOGADAS
        roleta1[24] = 0
        roleta4[24] = 0
        roleta6[24] = 0
        roleta7[24] = 0
        roleta9[24] = 0
        roleta10[24] = 0
        roleta11[24] = 0
        roleta13[24] = 0
        roleta15[24] = 0

        roleta1[25] = 0
        roleta4[25] = 0
        roleta6[25] = 0
        roleta7[25] = 0
        roleta9[25] = 0
        roleta10[25] = 0
        roleta11[25] = 0
        roleta13[25] = 0
        roleta15[25] = 0
        recuperacaoGALE = 0
                                                                    galeTeste = 1
        roletaAndamento = false
        apostando = false

    }
    async function ausente(){
        lobbyCrash = false;
        await page.goto("https://www.seubet.com/cassino-ao-vivo/slots/all/28/creedroomz/20000-400040312-aurum-roulette?provider=all&mode=real")
        await irLobby()
    }
    async function irLobby(){
        await reset()

    if(page.url() === roleta){
        await delay(5000)    
            try {
                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').getByRole('button', { name: 'Lobby' }).click();
            } catch (error) {
                //console.log("nao conseguiu clicar botao lobby")
            }
        await delay(5000)

            try {
                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-video-actions > button:nth-child(1)').first().click();
            } catch (error) {
                //console.log("nao consegui clicar para fechar video direito")
            }
            delay(10000)   
            try {
                 await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div').filter({ hasText: /^Roulette$/ }).getByRole('button').first().click();
            } catch (error) {
                //console.log("nao consegui clicar no primeiro batao roleta")
                ausente()
            }
        
        await delay(5000)
        
            try {
                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-in > div.lobby-body > div > div.lobby-content-holder > div > div > div > div > div.lobby-filter > ul > li:nth-child(2) > button > span').click({timeout:3000});
                //await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').getByRole('button', { name: 'Roulette', exact: true }).first().click();
            } catch (error) {
                //console.log("nao consegui clicar no segundo batao roleta") 
            }
            await delay(20000) 
            lobbyCrash = true
    }
    }
    async function roletaOFF(index){
            try {
                let roletaOFF  = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-table-overlay.lobby-table-offline > span').textContent({timeout:500});        
                if(roletaOFF === "Offline"){
                    return Promise.resolve(true)
                }else{
                    return Promise.resolve(false)
                }
            } catch (error) {
                
            }
    }
    async function permenecerROLETA(){
        try {
            let permanecer  = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').textContent({timeout:1000});        
            if(permanecer === "Permanecer aqui"){
                return Promise.resolve(true)
            }else{
                return Promise.resolve(false)
            }
        } catch (error) {
            
        }
    }
    async function clickColunm1(qtd){
            for (let i = 0; i < qtd; i++) {
                try {
                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('.board-right > div:nth-child(3) > .board-cell-in > .bet-chip-area').click({timeout:2000});
                } catch (error) {
                    
                }
            await delay(100)    
            }

    }
    async function clickColunm2(qtd){
            for (let i = 0; i < qtd; i++) {
                try {
                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('.board-right > div:nth-child(2) > .board-cell-in > .bet-chip-area').click();
                } catch (error) {
                    
                }
                await delay(100)  
            }
        
    }
    async function clickColunm3(qtd){
        for (let i = 0; i < qtd; i++) {
            try {
                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-layout.down > div > div > div.board-right > div:nth-child(1) > div').click();
            } catch (error) {
            
            }
            await delay(100)  
        }
    }
    async function fazerAposta(coluna,gales){
        coluna = parseInt(coluna)
        gales = parseInt(gales)
        recuperacaoGALE = parseInt(recuperacaoGALE)
        if(process.env.APOSTAR === "true" ){
            if(recuperacao == true && process.env.RECUPERACAO === "true"){
                //console.log(recuperacaoGALE)
                if(process.env.MODE_RECUPERACAO == 1){
                    if(recuperacaoGALE < 4){
                        console.log(recuon(" RECUPERAÇÃO MODO 1 "))
                        switch (gales) {
                            case 1:
                                gales = 4
                                break;
                            case 2:
                                gales = 5
                                break;
                            case 3:
                                gales = 6
                                break;
                        }
                    }else{
                        recuperacao = false
                        recuperacaoGALE = 0
                        galeTeste = 1
                        console.log(recuoff("RECUPERAÇÃO CONCLUIDA-------"))
                    }
                }else if(process.env.MODE_RECUPERACAO == 3){
                        //console.log(recuon(" RECUPERAÇÃO MODO 3 "))
                        switch (galeTeste) {
                            case 2:
                                if(gales == 1){
                                    gales = 4
                                }else if(gales == 2){
                                    gales = 5
                                }
                                break;
                            case 3:
                                if(gales == 1){
                                    gales = 5
                                }else if(gales == 2){
                                    gales = 6
                                }
                                break;
                                
                        }
                        if(galeTeste>3){
                            recuperacao = false
                            galeTeste = 1
                                console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                await incrementarLOG("APOSTA PERDIDA")
                        }
                }else{
                    if(recuperacaoGALE < process.env.RECUPERACAO_QTDJOGADAS){
                        //console.log("RECUPERAÇÃO-------")
                        switch (gales) {
                            case 1:
                                console.log(recuon("RECUPERAÇÃO-------"+recuperacaoGALE))
                                gales = 3
                                break;
                            case 2:
                                gales = 4
                                break;
                            case 3:
                                gales = 5
                                break;
                            case 4:
                                gales = 6
                                break;
                        }
                    }else{
                        recuperacao = false
                        recuperacaoGALE = 0
                        galeTeste = 1
                        console.log(recuoff("RECUPERAÇÃO CONCLUIDA-------"))
                    }
                }
            }
            try {
                let apostasAberta  = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator(' div.g-state.betting-time > div > div.toast > div.toast-in > div.toast-title > span.toast-title-in').textContent({timeout:3000});        
                if(apostasAberta === "Faça suas apostas, por favor"){
                
                        if(process.env.MODE_VALORAPOSTA == 1){
                            switch (gales) {
                                case 2:
                                    //2x
                                    try {
                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click();
                                    if(coluna == 1){
                                        clickColunm1(2)
                                    }else if(coluna == 2){
                                        clickColunm2(2)
                                    }else if(coluna == 3){
                                        clickColunm3(2)
                                    }
                                    } catch (error) {
                                        
                                    }
                                break;
                                case 3:
                                    //4x
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click();
                                    if(coluna == 1){
                                        clickColunm1(4)
                                    }else if(coluna == 2){
                                        clickColunm2(4)
                                    }else if(coluna == 3){
                                        clickColunm3(4)
                                    }
                                    } catch (error) {
                                        
                                    }
                                    
                                break;
                                case 4:
                                    //2x
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(2)
                                    }else if(coluna == 2){
                                        clickColunm2(2)
                                    }else if(coluna == 3){
                                        clickColunm3(2)
                                    }
                                    } catch (error) {
                                        
                                    }
                                    
                                break;
                                case 5:
                                    //1x
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(1)
                                    }else if(coluna == 2){
                                        clickColunm2(1)
                                    }else if(coluna == 3){
                                        clickColunm3(1)
                                    }
                                    } catch (error) {
                                        
                                    }
                                    
                                break;
                                case 6:
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(1)
                                    }else if(coluna == 2){
                                        clickColunm2(1)
                                    }else if(coluna == 3){
                                        clickColunm3(1)
                                    }
                                    } catch (error) {
                                        
                                    }
                                    await delay(1000)
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(2)
                                    }else if(coluna == 2){
                                        clickColunm2(2)
                                    }else if(coluna == 3){
                                        clickColunm3(2)
                                    }
                                    } catch (error) {
                                        
                                    }
                                break;
                                case 7:
                                    //13    2x5 2x1.5
                                    await delay(500)
                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(2)
                                        await delay(2000)
                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(2)
                                    }else if(coluna == 2){
                                        clickColunm2(2)
                                    }else if(coluna == 3){
                                        clickColunm3(2)
                                    }
                                    }else if(coluna == 2){
                                        clickColunm2(2)
                                        await delay(2000)
                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(2)
                                    }else if(coluna == 2){
                                        clickColunm2(2)
                                    }else if(coluna == 3){
                                        clickColunm3(2)
                                    }
                                    }else if(coluna == 3){
                                        clickColunm3(2)
                                        await delay(2000)
                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click();
                                    if(coluna == 1){
                                        clickColunm1(2)
                                    }else if(coluna == 2){
                                        clickColunm2(2)
                                    }else if(coluna == 3){
                                        clickColunm3(2)
                                    }
                                    }
                                break;
                            }
                        } 
                        if(process.env.MODE_VALORAPOSTA == 2){
                            switch (gales) {
                                case 1:
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(6) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(18) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(13) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(25) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(30) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(37) > .board-cell-in > div:nth-child(5)').click();
                                        } catch (error) {
                                            
                                        }
                                break;
                                case 2:
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(6) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(18) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(13) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(25) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(30) > .board-cell-in > div:nth-child(4)').click();
                                        await delay(100)
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(37) > .board-cell-in > div:nth-child(5)').click();
                                        } catch (error) {
                                            
                                        }
                                break;
                                case 33:
                                    try {
                                        await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click();
                                        await delay(100)
                                        for (let i = 1; i <= 2; i++) {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(6) > .board-cell-in > div:nth-child(4)').click();
                                            await delay(50)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(18) > .board-cell-in > div:nth-child(4)').click();
                                            await delay(50)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(13) > .board-cell-in > div:nth-child(4)').click();
                                            await delay(50)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(25) > .board-cell-in > div:nth-child(4)').click();
                                            await delay(50)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(30) > .board-cell-in > div:nth-child(4)').click();
                                            await delay(50)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div:nth-child(37) > .board-cell-in > div:nth-child(5)').click();
                                        }
                                    } catch (error) {
                                            
                                        }
                                break;
                            
                            }
                        }
                        //✅-REPETION_COLUMN
                        if(process.env.MODE_VALORAPOSTA == 20){

                            switch (coluna) {
                                case 1://APOSTAR 2/3
                                    switch (gales) {
                                        case 1:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click({timeout:4000});
                                                await clickColunm2(1)
                                                await clickColunm3(1)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 2/3 gale 1")
                                                }
                                        break;
                                        case 2:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                                await clickColunm2(1)
                                                await clickColunm3(1)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 2/3 gale 2")
                                                }
                                        break;
                                        case 3:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                                await clickColunm2(3)
                                                await clickColunm3(3)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 2/3 gale 3")
                                                }
                                        break;
                                        case 4:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                                await clickColunm2(9)
                                                await clickColunm3(9)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 2/3 gale 4")
                                                }
                                        break;
                                        case 5:
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click({timeout:4000});
                                                    await clickColunm2(1)
                                                    await clickColunm3(1)
                                                    await delay(100)
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:4000});
                                                    await clickColunm2(8)
                                                    await clickColunm3(8)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 2/3 gale 5/1")
                                                }
                                        break;
                                        case 6:
                                            try {
                                                await delay(100)
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^50$/ }).click({timeout:1000});
                                                await clickColunm2(2)
                                                await clickColunm3(2)
                                                await delay(100)
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                                await clickColunm2(4)
                                                await clickColunm3(4)
                                                await delay(100)
                                               
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('.chip-slider-inner > button').first().click({timeout:1000});
                                                await delay(100)
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:1000});
                                                await clickColunm2(1)
                                                await clickColunm3(1)
                                            } catch (error) {
                                                console.log("nao conseguiu apostar 2/3 gale 6/1")
                                            }
                                        break;
                                    }
                                break;
                                case 2://APOSTAR 1/3
                                    switch (gales) {
                                        case 1:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click({timeout:4000});
                                                await clickColunm1(1)
                                                await clickColunm3(1)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 1/3 gale 1")
                                                }
                                        break;
                                        case 2:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                                await clickColunm1(1)
                                                await clickColunm3(1)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 1/3 gale 2")
                                                }
                                        break;
                                        case 3:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                                await clickColunm1(3)
                                                await clickColunm3(3)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 1/3 gale 3")
                                                }
                                        break;
                                        case 4:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                                await clickColunm1(9)
                                                await clickColunm3(9)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 1/3 gale 4")
                                                }
                                        break;
                                        case 5:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click({timeout:4000});
                                                await clickColunm1(1)
                                                await clickColunm3(1)
                                                await delay(100)
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:4000});
                                                await clickColunm1(8)
                                                await clickColunm3(8)
                                                } catch (error) {
                                                    console.log("nao conseguiu apostar 1/3 gale 5/1")
                                                }
                                        break;
                                        case 6:
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^50$/ }).click({timeout:1000});
                                                await clickColunm1(2)
                                                await clickColunm3(2)
                                                await delay(100)
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                                await clickColunm1(4)
                                                await clickColunm3(4)
                                                await delay(100)
                                                
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('.chip-slider-inner > button').first().click({timeout:1000});
                                                await delay(100)
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:1000});
                                                await clickColunm1(1)
                                                await clickColunm3(1)
                                            } catch (error) {
                                                console.log("nao conseguiu apostar 1/3 gale 6/1")
                                            }
                                        break;
                                    }
                                break;
                                case 3://APOSTAR 1/2
                                switch (gales) {
                                    case 1:
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click({timeout:4000});
                                            await clickColunm1(1)
                                            await clickColunm2(1)
                                            } catch (error) {
                                                console.log("nao conseguiu apostar 1/2 gale 1")
                                            }
                                    break;
                                    case 2:
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                            await clickColunm1(1)
                                            await clickColunm2(1)
                                            } catch (error) {
                                                console.log("nao conseguiu apostar 1/2 gale 2")
                                            }
                                    break;
                                    case 3:
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                            await clickColunm1(3)
                                            await clickColunm2(3)
                                            } catch (error) {
                                                console.log("nao conseguiu apostar 1/2 gale 3")
                                            }
                                    break;
                                    case 4:
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:4000});
                                            await clickColunm1(9)
                                            await clickColunm2(9)
                                            } catch (error) {
                                                console.log("nao conseguiu apostar 1/2 gale 4")
                                            }
                                    break;
                                    case 5:
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click({timeout:4000});
                                            await clickColunm1(1)
                                            await clickColunm2(1)
                                            await delay(100)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:4000});
                                            await clickColunm1(8)
                                            await clickColunm2(8)
                                                
                                            } catch (error) {
                                                console.log("nao conseguiu apostar 1/2 gale 5-1")
                                            }
                                    break;
                                    case 6:
                                        try {
                                            await delay(100)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^50$/ }).click({timeout:1000});
                                            await clickColunm1(2)
                                            await clickColunm2(2)
                                            await delay(100)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm1(4)
                                            await clickColunm2(4)
                                            await delay(100)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('.chip-slider-inner > button').first().click({timeout:1000});
                                            await delay(100)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click({timeout:1000});
                                            await clickColunm1(1)
                                            await clickColunm2(1)
                                        
                                        } catch (error) {
                                            console.log("nao conseguiu apostar 1/2 gale 6-1")
                                        }
                                break;
                                }
                                break;
                            }
                        }
                        //✅-REPETION_COLUMN $10 $30 $90
                        if(process.env.MODE_VALORAPOSTA == 21){
                            switch (coluna) {
                                case 1://APOSTAR 2/3
                                    switch (gales) {
                                        case 1:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm2(2)
                                            await clickColunm3(2)    
                                            break;
                                        case 2:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm2(6)
                                            await clickColunm3(6)  
                                            break;
                                        case 3:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm2(8)
                                            await clickColunm3(8)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^50$/ }).click({timeout:1000});
                                            await clickColunm2(1)
                                            await clickColunm3(1)
                                            break;
                                    }
                                break;
                                case 2://APOSTAR 1/3
                                    switch (gales) {
                                        case 1:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm1(2)
                                            await clickColunm3(2)    
                                            break;
                                        case 2:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm1(6)
                                            await clickColunm3(6)  
                                            break;
                                        case 3:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm1(8)
                                            await clickColunm3(8)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^50$/ }).click({timeout:1000});
                                            await clickColunm1(1)
                                            await clickColunm3(1)
                                            break;
                                    }
                                break;
                                case 3://APOSTAR 1/2
                                    switch (gales) {
                                        case 1:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm2(2)
                                            await clickColunm1(2)    
                                            break;
                                        case 2:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm2(6)
                                            await clickColunm1(6)  
                                            break;
                                        case 3:
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click({timeout:1000});
                                            await clickColunm2(8)
                                            await clickColunm1(8)
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^50$/ }).click({timeout:1000});
                                            await clickColunm2(1)
                                            await clickColunm1(1)
                                            break;
                                    }
                                break;
                            }
                        }
                }else{
                //console.log("nao conseguiu apostar")
                }
            } catch (error) {
                console.log("APOSTA FECHADA")
                await irLobby()
            }
        }
    }
    async function contagem(mode,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9){
        switch (mode) {
            case 1:
                if(terminal1.includes(numero8) === false && terminal1.includes(numero7) === false && terminal1.includes(numero6) === false && 
                terminal1.includes(numero5) === false && terminal1.includes(numero4) === false && terminal1.includes(numero3) === false &&
                terminal1.includes(numero2) === false &&  terminal1.includes(numero1) === false){
                    return Promise.resolve(true)
                }else{
                    return Promise.resolve(false)
                }
            break;
            case 2:
                if(terminal2.includes(numero8) === false && terminal2.includes(numero7) === false && terminal2.includes(numero6) === false && 
                terminal2.includes(numero5) === false && terminal2.includes(numero4) === false && terminal2.includes(numero3) === false &&
                terminal2.includes(numero2) === false &&  terminal2.includes(numero1) === false){
                    return Promise.resolve(true)
                }else{
                    return Promise.resolve(false)
                }
            break;
            case 20:
                contcoluna1 = 0
                contcoluna2 = 0
                contcoluna3 = 0

                let numero = [numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9]
                for (let index = 0; index < 9; index++) {

                    if(coluna1.includes(numero[index]) === true){
                        contcoluna1++

                    }
                    if(coluna2.includes(numero[index]) === true){
                        contcoluna2++

                    }
                    if(coluna3.includes(numero[index]) === true){
                        contcoluna3++

                    }
                }
                if(process.env.MODE == 1){
                    if(contcoluna1>contcoluna2){
                        if(contcoluna1>contcoluna3){
                            //console.log(contcoluna1)
                            return Promise.resolve([contcoluna1,1])
                        }else{
                            //console.log(contcoluna3)
                            return Promise.resolve([contcoluna3,3])
                        }
                    }else{
                        if(contcoluna2>contcoluna3){
                            //console.log(contcoluna2)
                            return Promise.resolve([contcoluna2,2])
                            
                        }else{
                            //console.log(contcoluna3)
                            return Promise.resolve([contcoluna3,3])
                            
                        }
                    }
                }else if(process.env.MODE == 2){
                    if(contcoluna1<contcoluna2){
                        if(contcoluna1<contcoluna3){
                            //console.log(contcoluna1)
                            return Promise.resolve([contcoluna1,1])
                        }else{
                            //console.log(contcoluna3)
                            return Promise.resolve([contcoluna3,3])
                        }
                    }else{
                        if(contcoluna2<contcoluna3){
                            //console.log(contcoluna2)
                            return Promise.resolve([contcoluna2,2])
                        }else{
                            //console.log(contcoluna1)
                            return Promise.resolve([contcoluna3,3])
                        }
                    }
                }else if(process.env.MODE == 3){
                    if(contcoluna1>contcoluna2){
                        if(contcoluna1>contcoluna3){
                            //console.log(contcoluna1)
                            return Promise.resolve(1)
                        }else{
                            //console.log(contcoluna3)
                            return Promise.resolve(3)
                        }
                    }else{
                        if(contcoluna2>contcoluna3){
                            //console.log(contcoluna2)
                            return Promise.resolve(2)
                        }else{
                            //console.log(contcoluna1)
                            return Promise.resolve(3)
                        }
                    }
                }

            break;
        }
    }
    async function analisandoLobby(){

            await delay(7000)
            for (let index = 1; index < 16; index++) {
                if( index === 1 || index === 4 || index === 7 || index === 9 || index === 10 || index === 11 || index === 13 || index === 15){
                    let offline = await roletaOFF(index)
                    if(offline == true){
                        if(process.env.REPETION_COLUMN === "true"){
                            //console.log("ROLETA "+index+" OFFILINE")
                            switch (index) {
                                case 1:
                                    if(roleta1[21] === true){
                                        roleta1[21] === false
                                        roleta4[21] === true
                                    }
                                break;
                                case 4:
                                    if(roleta4[21] === true){
                                        roleta4[21] === false
                                        roleta6[21] === true
                                    }
                                    
                                break;
                                case 6:
                                    if(roleta6[21] === true){
                                        roleta6[21] === false
                                        roleta7[21] === true
                                    }
                                break;
                                case 7:
                                    if(roleta7[21] === true){
                                        roleta7[21] === false
                                        roleta9[21] === true  
                                    }
                                    
                                break;
                                case 9:
                                    if(roleta9[21] === true){
                                        roleta9[21] === false
                                        roleta10[21] === true 
                                    }
                                    
                                break;
                                case 10:
                                    if(roleta10[21] === true){
                                        roleta10[21] === false
                                        roleta11[21] === true
                                    }
                                break;
                                case 11:
                                    if(roleta11[21] === true){
                                        roleta11[21] === false
                                        roleta13[21] === true 
                                    }
                                break;
                                case 13:
                                    if(roleta13[21] === true){
                                        roleta13[21] === false
                                        roleta15[21] === true
                                    }
                                break;
                                case 15:
                                    if(roleta15[21] === true){
                                        roleta15[21] === false
                                        roleta1[21] === true
                                    }
                                break;
                            }
                        }

                    }else{
                        if(process.env.MULTSROLETA_WAVEDOWN === "true"){
                            roleta1[10] = true
                            roleta4[10] = true
                            roleta6[10] = true
                            roleta7[10] = true
                            roleta9[10] = true
                            roleta10[10] = true
                            roleta11[10] = true
                            roleta13[10] = true
                            roleta15[10] = true
                        }
                        if(process.env.MULTSROLETA_WAVEUP === "true"){
                            roleta1[14] = true
                            roleta4[14] = true
                            roleta6[14] = true
                            roleta7[14] = true
                            roleta9[14] = true
                            roleta10[14] = true
                            roleta11[14] = true
                            roleta13[14] = true
                            roleta15[14] = true
                        }
                        if(process.env.MULTSROLETA_COLUMN === "true"){
                            roleta1[21] = true
                            roleta4[21] = true
                            roleta6[21] = true
                            roleta7[21] = true
                            roleta9[21] = true
                            roleta10[21] = true
                            roleta11[21] = true
                            roleta13[21] = true
                            roleta15[21] = true
                        }
                        try {
                            
                            var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-info > div.lobby-table-name > span').textContent({timeout:500});
                            var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(1) > span').textContent({timeout:500});
                            var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(2) > span').textContent({timeout:500});
                            var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(3) > span').textContent({timeout:500});
                            var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(4) > span').textContent({timeout:500});
                            var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(5) > span').textContent({timeout:500});
                            var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(6) > span').textContent({timeout:500});
                            var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(7) > span').textContent({timeout:500});
                            var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(8) > span').textContent({timeout:500});
                            var numero9 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-content-holder > div > div > div > div > div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > div.lobby-table-inner > div.lobby-roulette-stats > div:nth-child(9) > span').textContent({timeout:500});

                        } catch (error) {

                            let permanecerAQUI = await permenecerROLETA()
                            if(permanecerAQUI == true){
                                try {
                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                } catch (error) {
                                    
                                }
                            }else{
                                break
                            }
                        }
                        numero1 = parseInt(numero1)
                        numero2 = parseInt(numero2)
                        numero3 = parseInt(numero3)
                        numero4 = parseInt(numero4)
                        numero5 = parseInt(numero5)
                        numero6 = parseInt(numero6)
                        numero7 = parseInt(numero7)
                        numero8 = parseInt(numero8)
                        numero9 = parseInt(numero9)
                        if(numero1 == 0){
                            roleta1[18] = 0
                            roleta4[18] = 0
                            roleta6[18] = 0
                            roleta7[18] = 0
                            roleta9[18] = 0
                            roleta10[18] = 0
                            roleta11[18] = 0
                            roleta13[18] = 0
                            roleta15[18] = 0
                    
                            roleta1[19] = 0
                            roleta4[19] = 0
                            roleta6[19] = 0
                            roleta7[19] = 0
                            roleta9[19] = 0
                            roleta10[19] = 0
                            roleta11[19] = 0
                            roleta13[19] = 0
                            roleta15[19] = 0
                        }

                    if(roletaAndamento === false && apostando === false){
                        switch (index) {
                            case 1:
                                if(roleta1[8] == true){
                                    roleta1[0] = numero1
                                    roleta1[1] = numero2
                                    roleta1[2] = numero3
                                    roleta1[3] = numero4
                                    roleta1[8] = false
                                }else if(roleta1[8] == false && numero1 != roleta1[0] && numero2 != roleta1[1] && numero3 != roleta1[2] ){
                                    roleta1[0] = numero1
                                    roleta1[1] = numero2
                                    roleta1[2] = numero3
                                    roleta1[3] = numero4
                                    if(process.env.NOT_COLUMN === "true"){
                                        if(coluna1.includes(numero1) === true){
                                            roleta1[4] = 0;
                                            roleta1[5]++;
                                            roleta1[6]++;
                                            //console.log("COLUNA 1")
                                        }
                                        if(coluna2.includes(numero1) === true){
                                            roleta1[4]++;
                                            roleta1[5] = 0;
                                            roleta1[6]++;
                                            //console.log("COLUNA 2")
                                        }
                                        if(coluna3.includes(numero1) === true){
                                            roleta1[4]++;
                                            roleta1[5]++;
                                            roleta1[6] = 0;
                                            //console.log("COLUNA 3")
                                        }
                    
                                        if(roleta1[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta1[9] = true
                                            roleta1[5] = 0;
                                            roleta1[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,1,numero1,nameRoleta,1)
                                            index = 20
                                            roleta4[9] = false
                                            roleta15[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        }
                                        if(roleta1[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta1[9] = true
                                            roleta1[4] = 0;
                                            roleta1[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,2,numero1,nameRoleta,1)
                                            index = 20
                                            roleta4[9] = false
                                            roleta15[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        }
                                        if(roleta1[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta1[9] = true
                                            roleta1[4] = 0;
                                            roleta1[5] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,3,numero1,nameRoleta,1)
                                            index = 20
                                            roleta4[9] = false
                                            roleta15[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        } 
                                    }
                                    if(process.env.WAVE_DOWN === "true" &&  roleta1[10] === true){
                                        if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta1[10] === true){
                                            roleta1[19]++
                                            if(roleta1[19] == process.env.WAVEDOWN_REPETION){
                                                roleta1[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,2)
                                                index = 20
                                                roleta4[9] = false
                                                roleta6[9] = false
                                                roleta7[9] = false
                                                roleta9[9] = false
                                                roleta10[9] = false
                                                roleta11[9] = false
                                                roleta13[9] = false 
                                                roleta15[9] = false 
                                            }
                                        }
                                    }
                                    if(process.env.WAVE_UP === "true" && roleta1[14] === true){
                                        if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta1[14] === true ){
                                            roleta1[18]++
                                            if(roleta1[18] == process.env.WAVEUP_REPETION){
                                            roleta1[9] = true
                                            roletaAndamento = true
                                            entraRoleta(index,0,numero1,nameRoleta,3)
                                            index = 20
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false 
                                            roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.TERMINAL1 === "true"){
                                        const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                        }
                                    }
                                    if(process.env.TERMINAL2 === "true"){
                                        const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,4)
                                        }
                                    }
                                    if(process.env.REPETION_COLUMN === "true" && roleta1[21] === true && columnGALEHORA < process.env.COLUMN_JGHORA){
                                        const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                        if(cont[0] == process.env.QTD_COLUMN){
                                            if(process.env.MODE == 1){
                                                console.log("COLUNA MAIS SAIDA É "+cont)
                                            }else if(process.env.MODE == 2){
                                                console.log("COLUNA MENOS SAIDA É "+cont)
                                            }
                                        roletaAndamento = true
                                        roleta1[9] = true
                                        roleta1[21] = false
                                        roleta4[21] = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1)    
                                        }
                                        
                                    }
                                    if(process.env.VZDOZERO === "true"){
                                        if(vzdozero.includes(numero1) === false ){
                                            roleta1[22]++
                                            if(roleta1[22] == process.env.VZ0_REPETION){
                                                roleta1[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,5)
                                                index = 20
                                            }
                                        }
                                    }
                                }
                            break;
                            case 4:
                                if(roleta4[8] == true){
                                    roleta4[0] = numero1
                                    roleta4[1] = numero2
                                    roleta4[2] = numero3
                                    roleta4[3] = numero4
                                    roleta4[8] = false
                                }else if(roleta4[8] == false && numero1 != roleta4[0] && numero2 != roleta4[1] && numero3 != roleta4[2] ){
                                    roleta4[0] = numero1
                                    roleta4[1] = numero2
                                    roleta4[2] = numero3
                                    roleta4[3] = numero4
                                    if(process.env.NOT_COLUMN === "true" ){
                                        if(coluna1.includes(numero1) === true){
                                            roleta4[4] = 0;
                                            roleta4[5]++;
                                            roleta4[6]++;
                                            //console.log("COLUNA 1")
                                        }
                                        if(coluna2.includes(numero1) === true){
                                            roleta4[4]++;
                                            roleta4[5] = 0;
                                            roleta4[6]++;
                                            //console.log("COLUNA 2")
                                        }
                                        if(coluna3.includes(numero1) === true){
                                            roleta4[4]++;
                                            roleta4[5]++;
                                            roleta4[6] = 0;
                                            //console.log("COLUNA 3")
                                        }
                    
                                        if(roleta4[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta4[9] = true
                                            roleta4[5] = 0;
                                            roleta4[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,1,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta15[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        }
                                        if(roleta4[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta4[9] = true
                                            roleta4[4] = 0;
                                            roleta4[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,2,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta15[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        }
                                        if(roleta4[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta4[9] = true
                                            roleta4[4] = 0;
                                            roleta4[5] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,3,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta15[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        } 
                                    }
                                    if(process.env.WAVE_DOWN === "true" && roleta4[10] === true){
                                        if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta4[10] === true ){
                                            roleta4[19]++
                                            if(roleta4[19] == process.env.WAVEDOWN_REPETION){
                                                roleta4[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,2)
                                                index = 20
                                                roleta1[9] = false
                                                roleta6[9] = false
                                                roleta7[9] = false
                                                roleta9[9] = false
                                                roleta10[9] = false
                                                roleta11[9] = false
                                                roleta13[9] = false 
                                                roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.WAVE_UP === "true" && roleta4[14] === true){
                                        if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta4[14] === true ){
                                            roleta4[18]++
                                            if(roleta4[18] == process.env.WAVEUP_REPETION){
                                            roleta4[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,3)
                                                index = 20
                                            roleta1[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false 
                                            roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.TERMINAL1 === "true"){
                                        const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                        }
                                    }
                                    if(process.env.TERMINAL2 === "true"){
                                        const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,4)
                                        }
                                    }
                                    if(process.env.REPETION_COLUMN === "true" && roleta4[21] === true && columnGALEHORA < process.env.COLUMN_JGHORA){
                                        const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                        if(cont[0] == process.env.QTD_COLUMN){
                                        if(process.env.MODE == 1){
                                            console.log("COLUNA MAIS SAIDA É "+cont)
                                        }else if(process.env.MODE == 2){
                                            console.log("COLUNA MENOS SAIDA É "+cont)
                                        }
                                        roletaAndamento = true
                                        roleta4[9] = true
                                        roleta4[21] = false
                                        roleta7[21] = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1)    
                                        }
                                        
                                    }
                                    if(process.env.VZDOZERO === "true"){
                                        if(vzdozero.includes(numero1) === false ){
                                            roleta4[22]++
                                            if(roleta4[22] == process.env.VZ0_REPETION){
                                                roleta4[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,5)
                                                index = 20
                                            }
                                        }
                                    }

                                }
                            break;                    
                            case 6:
                                if(roleta6[8] == true){
                                    roleta6[0] = numero1
                                    roleta6[1] = numero2
                                    roleta6[2] = numero3
                                    roleta6[3] = numero4
                                    roleta6[8] = false
                                }else if(roleta6[8] == false && numero1 != roleta6[0] && numero2 != roleta6[1] && numero3 != roleta6[2] ){
                                roleta6[0] = numero1
                                roleta6[1] = numero2
                                roleta6[2] = numero3
                                roleta6[3] = numero4
                                if(process.env.NOT_COLUMN === "true" == true){
                                    if(coluna1.includes(numero1) === true){
                                        roleta6[4] = 0;
                                        roleta6[5]++;
                                        roleta6[6]++;
                                        //console.log("COLUNA 1")
                                    }
                                    if(coluna2.includes(numero1) === true){
                                        roleta6[4]++;
                                        roleta6[5] = 0;
                                        roleta6[6]++;
                                        //console.log("COLUNA 2")
                                    }
                                    if(coluna3.includes(numero1) === true){
                                        roleta6[4]++;
                                        roleta6[5]++;
                                        roleta6[6] = 0;
                                        //console.log("COLUNA 3")
                                    }
                
                                    if(roleta6[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                        roleta6[9] = true
                                        roleta6[5] = 0;
                                        roleta6[6] = 0;
                                        roletaAndamento = true
                                        entraRoleta(index,1,numero1,nameRoleta,1)
                                        index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta7[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false
                                        roleta15[9] = false
                                    }
                                    if(roleta6[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                        roleta6[9] = true
                                        roleta6[4] = 0;
                                        roleta6[6] = 0;
                                        roletaAndamento = true
                                        entraRoleta(index,2,numero1,nameRoleta,1)
                                        index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta7[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false
                                        roleta15[9] = false
                                    }
                                    if(roleta6[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                        roleta6[9] = true
                                        roleta6[4] = 0;
                                        roleta6[5] = 0;
                                        roletaAndamento = true
                                        entraRoleta(index,3,numero1,nameRoleta,1)
                                        index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta7[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false
                                        roleta15[9] = false
                                    } 
                                }
                                if(process.env.WAVE_DOWN === "true" && roleta6[10] === true){
                                    if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta6[10] === true ){
                                        roleta6[19]++
                                        if(roleta6[19] == process.env.WAVEDOWN_REPETION){
                                            roleta6[9] = true
                                            roletaAndamento = true
                                            entraRoleta(index,0,numero1,nameRoleta,2)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false 
                                            roleta15[9] = false
                                        }
                                    }
                                }
                                if(process.env.WAVE_UP === "true" && roleta6[14] === true){
                                    if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta6 [14] === true ){
                                        roleta6[18]++
                                        if(roleta6[18] == process.env.WAVEUP_REPETION){
                                        roleta6[9] = true
                                            roletaAndamento = true
                                            entraRoleta(index,0,numero1,nameRoleta,3)
                                            index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta7[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false 
                                        roleta15[9] = false
                                        }
                                    }
                                }
                                if(process.env.TERMINAL1 === "true"){
                                    const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                    console.log("SAIU "+cont+" vezes TERMINAL 2")
                                    if(cont === true){
                                        roletaAndamento = true
                                        roleta1[9] = true
                                        entraRoleta(index,0,numero1,nameRoleta,5)
                                    }
                                }
                                if(process.env.TERMINAL2 === "true"){
                                    const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                    console.log("SAIU "+cont+" vezes TERMINAL 2")
                                    if(cont === true){
                                        
                                        roletaAndamento = true
                                        roleta1[9] = true
                                        entraRoleta(index,0,numero1,nameRoleta,4)
                                    }
                                }
                                if(process.env.REPETION_COLUMN === "true" && roleta6[21] === true && columnGALEHORA < process.env.COLUMN_JGHORA){
                                    const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                    if(cont[0] == process.env.QTD_COLUMN){
                                        if(process.env.MODE == 1){
                                            console.log("COLUNA MAIS SAIDA É "+cont)
                                        }else if(process.env.MODE == 2){
                                            console.log("COLUNA MENOS SAIDA É "+cont)
                                        }
                                        roletaAndamento = true
                                        roleta6[9] = true
                                        roleta6[21] = false
                                        roleta7[21] = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1)
                                    }
                                }
                                if(process.env.VZDOZERO === "true"){
                                    if(vzdozero.includes(numero1) === false ){
                                        roleta6[22]++
                                        if(roleta6[22] == process.env.VZ0_REPETION){
                                            roleta6[9] = true
                                            roletaAndamento = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                            index = 20
                                        }
                                    }
                                }
                            }
                            break;        
                            case 7:
                                if(roleta7[8] == true){
                                    roleta7[0] = numero1
                                    roleta7[1] = numero2
                                    roleta7[2] = numero3
                                    roleta7[3] = numero4
                                    roleta7[8] = false
                                }else if(roleta7[8] == false && numero1 != roleta7[0] && numero2 != roleta7[1] && numero3 != roleta7[2] ){
                                roleta7[0] = numero1
                                roleta7[1] = numero2
                                roleta7[2] = numero3
                                roleta7[3] = numero4
                                if(process.env.NOT_COLUMN === "true"){
                                    if(coluna1.includes(numero1) === true){
                                        roleta7[4] = 0;
                                        roleta7[5]++;
                                        roleta7[6]++;
                                        //console.log("COLUNA 1")
                                    }
                                    if(coluna2.includes(numero1) === true){
                                        roleta7[4]++;
                                        roleta7[5] = 0;
                                        roleta7[6]++;
                                        //console.log("COLUNA 2")
                                    }
                                    if(coluna3.includes(numero1) === true){
                                        roleta7[4]++;
                                        roleta7[5]++;
                                        roleta7[6] = 0;
                                        //console.log("COLUNA 3")
                                    }
                                
                                    if(roleta7[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                        roleta7[9]= true
                                        roleta7[5] = 0;
                                        roleta7[6] = 0;
                                        roletaAndamento = true
                                        entraRoleta(index,1,numero1,nameRoleta,1)
                                        index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta6[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false
                                        roleta15[9] = false
                                    }
                                    if(roleta7[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                        roleta7[9]= true
                                        roleta7[4] = 0;
                                        roleta7[6] = 0;
                                        roletaAndamento = true
                                        entraRoleta(index,2,numero1,nameRoleta,1)
                                        index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta6[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false
                                        roleta15[9] = false
                                    }
                                    if(roleta7[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                        roleta7[9]= true
                                        roleta7[4] = 0;
                                        roleta7[5] = 0;
                                        roletaAndamento = true
                                        entraRoleta(index,3,numero1,nameRoleta,1)
                                        index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta6[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false
                                        roleta15[9] = false
                                    } 
                                }
                                if(process.env.WAVE_DOWN === "true" && roleta7[10] === true){
                                    if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta7[10] === true ){
                                        roleta7[19]++
                                        if(roleta7[19] == process.env.WAVEDOWN_REPETION){
                                            roleta7[9] = true
                                            roletaAndamento = true
                                            entraRoleta(index,0,numero1,nameRoleta,2)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false 
                                            roleta15[9] = false
                                        }
                                    }
                                }
                                if(process.env.WAVE_UP === "true" && roleta7[14] === true){
                                    if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta7[14] === true ){
                                        roleta7[18]++
                                        if(roleta7[18] == process.env.WAVEUP_REPETION){
                                        roleta7[9] = true
                                            roletaAndamento = true
                                            entraRoleta(index,0,numero1,nameRoleta,3)
                                            index = 20
                                        roleta1[9] = false
                                        roleta4[9] = false
                                        roleta6[9] = false
                                        roleta9[9] = false
                                        roleta10[9] = false
                                        roleta11[9] = false
                                        roleta13[9] = false 
                                        roleta15[9] = false
                                        }
                                    }
                                }
                                if(process.env.TERMINAL1 === "true"){
                                    const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                    console.log("SAIU "+cont+" vezes TERMINAL 2")
                                    if(cont === true){
                                        roletaAndamento = true
                                        roleta1[9] = true
                                        entraRoleta(index,0,numero1,nameRoleta,5)
                                    }
                                }
                                if(process.env.TERMINAL2 === "true"){
                                    const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                    console.log("SAIU "+cont+" vezes TERMINAL 2")
                                    if(cont === true){
                                        
                                        roletaAndamento = true
                                        roleta1[9] = true
                                        entraRoleta(index,0,numero1,nameRoleta,4)
                                    }
                                }
                                if(process.env.REPETION_COLUMN === "true" && roleta7[21] === true && columnGALEHORA < process.env.COLUMN_JGHORA){
                                    const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                    if(cont[0] == process.env.QTD_COLUMN){
                                      if(process.env.MODE == 1){
                                        console.log("COLUNA MAIS SAIDA É "+cont)
                                    }else if(process.env.MODE == 2){
                                        console.log("COLUNA MENOS SAIDA É "+cont)
                                    }
                                    roletaAndamento = true
                                    roleta7[9] = true
                                    roleta7[21] = false
                                    roleta9[21] = true
                                    entraRoleta(index,cont[1],numero1,nameRoleta,1)  
                                    }
                                    
                                }
                                if(process.env.VZDOZERO === "true"){
                                    if(vzdozero.includes(numero1) === false ){
                                        roleta7[22]++
                                        if(roleta7[22] == process.env.VZ0_REPETION){
                                            roleta7[9] = true
                                            roletaAndamento = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                            index = 20
                                        }
                                    }
                                }
                            }
                            break;  
                            case 9:
                                if(roleta9[8] == true){
                                    roleta9[0] = numero1
                                    roleta9[1] = numero2
                                    roleta9[2] = numero3
                                    roleta9[3] = numero4
                                    roleta9[8] = false
                                }else if(roleta9[8] == false && numero1 != roleta9[0] && numero2 != roleta9[1] && numero3 != roleta9[2] ){
                                    roleta9[0] = numero1
                                    roleta9[1] = numero2
                                    roleta9[2] = numero3
                                    roleta9[3] = numero4
                                    if(process.env.NOT_COLUMN === "true"){
                                        if(coluna1.includes(numero1) === true){
                                            roleta9[4] = 0;
                                            roleta9[5]++;
                                            roleta9[6]++;
                                            //console.log("COLUNA 1")
                                        }
                                        if(coluna2.includes(numero1) === true){
                                            roleta9[4]++;
                                            roleta9[5] = 0;
                                            roleta9[6]++;
                                            //console.log("COLUNA 2")
                                        }
                                        if(coluna3.includes(numero1) === true){
                                            roleta9[4]++;
                                            roleta9[5]++;
                                            roleta9[6] = 0;
                                            //console.log("COLUNA 3")
                                        }
                                    
                                        if(roleta9[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta9[9]= true
                                            roleta9[5] = 0;
                                            roleta9[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,1,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta9[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta9[9]= true
                                            roleta9[4] = 0;
                                            roleta9[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,2,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta9[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta9[9]= true
                                            roleta9[4] = 0;
                                            roleta9[5] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,3,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        } 
                                    }
                                    if(process.env.WAVE_DOWN === "true" && roleta9[10] === true){
                                        if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta9[10] === true ){
                                            roleta9[19]++
                                            if(roleta9[19] == process.env.WAVEDOWN_REPETION){
                                                roleta9[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,2)
                                                index = 20
                                                roleta1[9] = false
                                                roleta4[9] = false
                                                roleta6[9] = false
                                                roleta7[9] = false
                                                roleta10[9] = false
                                                roleta11[9] = false
                                                roleta13[9] = false 
                                                roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.WAVE_UP === "true" && roleta9[14] === true){
                                        if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta9[14] === true ){
                                            roleta9[18]++
                                            if(roleta9[18] == process.env.WAVEUP_REPETION){
                                            roleta9[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,3)
                                                index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false 
                                            roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.TERMINAL1 === "true"){
                                        const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                        }
                                    }
                                    if(process.env.TERMINAL2 === "true"){
                                        const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,4)
                                        }
                                    }
                                    if(process.env.REPETION_COLUMN === "true" && roleta9[21] === true && columnGALEHORA < process.env.COLUMN_JGHORA){
                                        const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                        if(cont[0] == process.env.QTD_COLUMN){
                                           if(process.env.MODE == 1){
                                            console.log("COLUNA MAIS SAIDA É "+cont)
                                        }else if(process.env.MODE == 2){
                                            console.log("COLUNA MENOS SAIDA É "+cont)
                                        }
                                        roletaAndamento = true
                                        roleta9[9] = true
                                        roleta9[21] = false
                                        roleta10[21] = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1) 
                                        }
                                        
                                    }
                                    if(process.env.VZDOZERO === "true"){
                                        if(vzdozero.includes(numero1) === false ){
                                            roleta9[22]++
                                            if(roleta9[22] == process.env.VZ0_REPETION){
                                                roleta9[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,5)
                                                index = 20
                                            }
                                        }
                                    }
                                }
                            break;
                            case 10:
                                if(roleta10[8] == true){
                                    roleta10[0] = numero1
                                    roleta10[1] = numero2
                                    roleta10[2] = numero3
                                    roleta10[3] = numero4
                                    roleta10[8] = false
                                }else if(roleta10[8] == false && numero1 != roleta10[0] && numero2 != roleta10[1] && numero3 != roleta10[2] ){
                                    roleta10[0] = numero1
                                    roleta10[1] = numero2
                                    roleta10[2] = numero3
                                    roleta10[3] = numero4
                                    if(process.env.NOT_COLUMN === "true"){
                                        if(coluna1.includes(numero1) === true){
                                            roleta10[4] = 0;
                                            roleta10[5]++;
                                            roleta10[6]++;
                                            //console.log("COLUNA 1")
                                        }
                                        if(coluna2.includes(numero1) === true){
                                            roleta10[4]++;
                                            roleta10[5] = 0;
                                            roleta10[6]++;
                                            //console.log("COLUNA 2")
                                        }
                                        if(coluna3.includes(numero1) === true){
                                            roleta10[4]++;
                                            roleta10[5]++;
                                            roleta10[6] = 0;
                                            //console.log("COLUNA 3")
                                        }
                                    
                                        if(roleta10[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta10[9]= true
                                            roleta10[5] = 0;
                                            roleta10[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,1,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta10[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta10[9]= true
                                            roleta10[4] = 0;
                                            roleta10[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,2,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta10[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta10[9]= true
                                            roleta10[4] = 0;
                                            roleta10[5] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,3,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        } 
                                    }
                                    if(process.env.WAVE_DOWN === "true" && roleta10[10] === true){
                                        if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta10[10] === true ){
                                            roleta10[19]++
                                            if(roleta10[19] == process.env.WAVEDOWN_REPETION){
                                                roleta10[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,2)
                                                index = 20
                                                roleta1[9] = false
                                                roleta4[9] = false
                                                roleta6[9] = false
                                                roleta7[9] = false
                                                roleta9[9] = false
                                                roleta11[9] = false
                                                roleta13[9] = false 
                                                roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.WAVE_UP === "true" && roleta10[14] === true){
                                        if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta10[14] === true ){
                                            roleta10[18]++
                                            if(roleta10[18] == process.env.WAVEUP_REPETION){
                                            roleta10[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,3)
                                                index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false 
                                            roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.TERMINAL1 === "true"){
                                        const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                        }
                                    }
                                    if(process.env.TERMINAL2 === "true"){
                                        const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,4)
                                        }
                                    }
                                    if(process.env.REPETION_COLUMN === "true" && roleta10[21] === true  && columnGALEHORA < process.env.COLUMN_JGHORA){
                                        const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                        if(cont[0] == process.env.QTD_COLUMN){
                                        if(process.env.MODE == 1){
                                            console.log("COLUNA MAIS SAIDA É "+cont)
                                        }else if(process.env.MODE == 2){
                                            console.log("COLUNA MENOS SAIDA É "+cont)
                                        }
                                        roletaAndamento = true
                                        roleta10[9] = true
                                        roleta10[21] = false
                                        roleta11[21] = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1)    
                                        }
                                        
                                    }
                                    if(process.env.VZDOZERO === "true"){
                                        if(vzdozero.includes(numero1) === false ){
                                            roleta10[22]++
                                            if(roleta10[22] == process.env.VZ0_REPETION){
                                                roleta10[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,5)
                                                index = 20
                                            }
                                        }
                                    }
                                }
                            break;
                            case 11:
                                if(roleta11[8] == true){
                                    roleta11[0] = numero1
                                    roleta11[1] = numero2
                                    roleta11[2] = numero3
                                    roleta11[3] = numero4
                                    roleta11[8] = false
                                }else if(roleta11[8] == false && numero1 != roleta11[0] && numero2 != roleta11[1] && numero3 != roleta11[2] ){
                                    roleta11[0] = numero1
                                    roleta11[1] = numero2
                                    roleta11[2] = numero3
                                    roleta11[3] = numero4
                                    if(process.env.NOT_COLUMN === "true"){
                                        if(coluna1.includes(numero1) === true){
                                            roleta11[4] = 0;
                                            roleta11[5]++;
                                            roleta11[6]++;
                                            //console.log("COLUNA 1")
                                        }
                                        if(coluna2.includes(numero1) === true){
                                            roleta11[4]++;
                                            roleta11[5] = 0;
                                            roleta11[6]++;
                                            //console.log("COLUNA 2")
                                        }
                                        if(coluna3.includes(numero1) === true){
                                            roleta11[4]++;
                                            roleta11[5]++;
                                            roleta11[6] = 0;
                                            //console.log("COLUNA 3")
                                        }
                                    
                                        if(roleta11[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta11[9]= true
                                            roleta11[5] = 0;
                                            roleta11[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,1,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta11[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta11[9]= true
                                            roleta11[4] = 0;
                                            roleta11[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,2,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta11[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta11[9]= true
                                            roleta11[4] = 0;
                                            roleta11[5] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,3,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta13[9] = false
                                            roleta15[9] = false
                                        } 
                                    }
                                    if(process.env.WAVE_DOWN === "true" && roleta11[10] === true){
                                        if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta11[10] === true ){
                                            roleta11[19]++
                                            if(roleta11[19] == process.env.WAVEDOWN_REPETION){
                                                roleta11[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,2)
                                                index = 20
                                            }
                                        }
                                    }
                                    if(process.env.WAVE_UP === "true" && roleta11[14] === true){
                                        if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta11[14] === true ){
                                            roleta11[18]++
                                            if(roleta11[18] == process.env.WAVEUP_REPETION){
                                            roleta11[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,3)
                                                index = 20
                                            }
                                        }
                                    }
                                    if(process.env.TERMINAL1 === "true"){
                                        const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                        }
                                    }
                                    if(process.env.TERMINAL2 === "true"){
                                        const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,4)
                                        }
                                    }
                                    if(process.env.REPETION_COLUMN === "true" && roleta11[21] === true  && columnGALEHORA < process.env.COLUMN_JGHORA){
                                        const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                        if(cont[0] == process.env.QTD_COLUMN){
                                            if(process.env.MODE == 1){
                                            console.log("COLUNA MAIS SAIDA É "+cont)
                                        }else if(process.env.MODE == 2){
                                            console.log("COLUNA MENOS SAIDA É "+cont)
                                        }
                                        roletaAndamento = true
                                        roleta11[9] = true
                                        roleta11[21] = false
                                        roleta13[21] = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1)
                                        }
                                        
                                    }
                                    if(process.env.VZDOZERO === "true"){
                                        if(vzdozero.includes(numero1) === false ){
                                            roleta11[22]++
                                            if(roleta11[22] == process.env.VZ0_REPETION){
                                                roleta11[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,5)
                                                index = 20
                                            }
                                        }
                                    }
                                }
                            break;
                            case 13:
                                if(roleta13[8] == true){
                                    roleta13[0] = numero1
                                    roleta13[1] = numero2
                                    roleta13[2] = numero3
                                    roleta13[3] = numero4
                                    roleta13[8] = false
                                }else if(roleta13[8] == false && numero1 != roleta13[0] && numero2 != roleta13[1] && numero3 != roleta13[2] ){
                                    roleta13[0] = numero1
                                    roleta13[1] = numero2
                                    roleta13[2] = numero3
                                    roleta13[3] = numero4
                                    if(process.env.NOT_COLUMN === "true" ){
                                        if(coluna1.includes(numero1) === true){
                                            roleta13[4] = 0;
                                            roleta13[5]++;
                                            roleta13[6]++;
                                            //console.log("COLUNA 1")
                                        }
                                        if(coluna2.includes(numero1) === true){
                                            roleta13[4]++;
                                            roleta13[5] = 0;
                                            roleta13[6]++;
                                            //console.log("COLUNA 2")
                                        }
                                        if(coluna3.includes(numero1) === true){
                                            roleta13[4]++;
                                            roleta13[5]++;
                                            roleta13[6] = 0;
                                            //console.log("COLUNA 3")
                                        }
                                    
                                        if(roleta13[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta13[9]= true
                                            roleta13[5] = 0;
                                            roleta13[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,1,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta13[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta13[9]= true
                                            roleta13[4] = 0;
                                            roleta13[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,2,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta15[9] = false
                                        }
                                        if(roleta13[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta13[9]= true
                                            roleta13[4] = 0;
                                            roleta13[5] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,3,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta15[9] = false
                                        } 
                                    }
                                    if(process.env.WAVE_DOWN === "true" && roleta13[10] === true){
                                        if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta13[10] === true ){
                                            roleta13[19]++
                                            if(roleta13[19] == process.env.WAVEDOWN_REPETION){
                                                roleta13[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,2)
                                                index = 20
                                                roleta1[9] = false
                                                roleta4[9] = false
                                                roleta6[9] = false
                                                roleta7[9] = false
                                                roleta9[9] = false
                                                roleta10[9] = false
                                                roleta11[9] = false 
                                                roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.WAVE_UP === "true" && roleta13[14] === true){
                                        if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta13[14] === true ){
                                            roleta13[18]++
                                            if(roleta13[18] == process.env.WAVEUP_REPETION){
                                            roleta13[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,3)
                                                index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false 
                                            roleta15[9] = false
                                            }
                                        }
                                    }
                                    if(process.env.TERMINAL1 === "true"){
                                        const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                        }
                                    }
                                    if(process.env.TERMINAL2 === "true"){
                                        const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,4)
                                        }
                                    }
                                    if(process.env.REPETION_COLUMN === "true" && roleta13[21] === true && columnGALEHORA < process.env.COLUMN_JGHORA){
                                        const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                        if(cont[0] == process.env.QTD_COLUMN){
                                        if(process.env.MODE == 1){
                                            console.log("COLUNA MAIS SAIDA É "+cont)
                                        }else if(process.env.MODE == 2){
                                            console.log("COLUNA MENOS SAIDA É "+cont)
                                        }
                                        roletaAndamento = true
                                        roleta13[9] = true
                                        roleta13[21] = false
                                        roleta15[21] = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1)    
                                        }
                                        
                                    }
                                    if(process.env.VZDOZERO === "true"){
                                        if(vzdozero.includes(numero1) === false ){
                                            roleta13[22]++
                                            if(roleta13[22] == process.env.VZ0_REPETION){
                                                roleta13[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,5)
                                                index = 20
                                            }
                                        }
                                    }
                                }
                            break;
                            case 15:
                                if(roleta15[8] == true){
                                    roleta15[0] = numero1
                                    roleta15[1] = numero2
                                    roleta15[2] = numero3
                                    roleta15[3] = numero4
                                    roleta15[8] = false
                                }else if(roleta15[8] == false && numero1 != roleta15[0] && numero2 != roleta15[1] && numero3 != roleta15[2] ){
                                    roleta15[0] = numero1
                                    roleta15[1] = numero2
                                    roleta15[2] = numero3
                                    roleta15[3] = numero4
                                    if(process.env.NOT_COLUMN === "true"){
                                        if(coluna1.includes(numero1) === true){
                                            roleta15[4] = 0;
                                            roleta15[5]++;
                                            roleta15[6]++;
                                            //console.log("COLUNA 1")
                                        }
                                        if(coluna2.includes(numero1) === true){
                                            roleta15[4]++;
                                            roleta15[5] = 0;
                                            roleta15[6]++;
                                            //console.log("COLUNA 2")
                                        }
                                        if(coluna3.includes(numero1) === true){
                                            roleta15[4]++;
                                            roleta15[5]++;
                                            roleta15[6] = 0;
                                            //console.log("COLUNA 3")
                                        }
                                    
                                        if(roleta15[4] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta15[9]= true
                                            roleta15[5] = 0;
                                            roleta15[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,1,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        }
                                        if(roleta15[5] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta15[9]= true
                                            roleta15[4] = 0;
                                            roleta15[6] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,2,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        }
                                        if(roleta15[6] == process.env.SEQUENCIA_NOT_COLUMN && roletaAndamento === false){
                                            roleta15[9]= true
                                            roleta15[4] = 0;
                                            roleta15[5] = 0;
                                            roletaAndamento = true
                                            entraRoleta(index,3,numero1,nameRoleta,1)
                                            index = 20
                                            roleta1[9] = false
                                            roleta4[9] = false
                                            roleta6[9] = false
                                            roleta7[9] = false
                                            roleta9[9] = false
                                            roleta10[9] = false
                                            roleta11[9] = false
                                            roleta13[9] = false
                                        } 
                                    }
                                    if(process.env.WAVE_DOWN === "true" && roleta15[10] === true){
                                        if(waveDown.includes(numero1) === false && roletaAndamento === false && roleta15[10] === true ){
                                            roleta15[19]++
                                            if(roleta15[19] == process.env.WAVEDOWN_REPETION){
                                                roleta15[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,2)
                                                break
                                            }
                                        }
                                    }
                                    if(process.env.WAVE_UP === "true" && roleta15[14] === true){
                                        if(waveUp.includes(numero1) === false && roletaAndamento === false && roleta15[14] === true ){
                                            roleta15[18]++
                                            if(roleta15[18] == process.env.WAVEUP_REPETION){
                                            roleta15[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,3)
                                                break
                                            }
                                        }
                                    }
                                    if(process.env.TERMINAL1 === "true"){
                                        const cont = await contagem(1,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,5)
                                        }
                                    }
                                    if(process.env.TERMINAL2 === "true"){
                                        const cont = await contagem(2,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                        console.log("SAIU "+cont+" vezes TERMINAL 2")
                                        if(cont === true){
                                            
                                            roletaAndamento = true
                                            roleta1[9] = true
                                            entraRoleta(index,0,numero1,nameRoleta,4)
                                        }
                                    }
                                    if(process.env.REPETION_COLUMN === "true" && roleta15[21] === true && columnGALEHORA < process.env.COLUMN_JGHORA){
                                        const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9)
                                        if(cont[0] == process.env.QTD_COLUMN){
                                         if(process.env.MODE == 1){
                                            console.log("COLUNA MAIS SAIDA É "+cont)
                                        }else if(process.env.MODE == 2){
                                            console.log("COLUNA MENOS SAIDA É "+cont)
                                        }
                                        roletaAndamento = true
                                        roleta15[9] = true
                                        roleta15[21] = false
                                        repeatColunReset = true
                                        entraRoleta(index,cont[1],numero1,nameRoleta,1)
                                        await resetTypes(3)   
                                        }
                                        
                                    }
                                    if(process.env.VZDOZERO === "true"){
                                        if(vzdozero.includes(numero1) === false ){
                                            roleta15[22]++
                                            if(roleta15[22] == process.env.VZ0_REPETION){
                                                roleta15[9] = true
                                                roletaAndamento = true
                                                entraRoleta(index,0,numero1,nameRoleta,5)
                                                break
                                            }
                                        }
                                    }
                                }
                            break;                  
                        }
                    }   
                }
            }
        }
    }  
    async function entraRoleta(index,num,ultimonumero,nameR,mode){
                //await page.pause()
                mode = parseInt(mode)
                
                //console.log(mode)
                try {
                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.lobby-list.lobby-scroll-style-transparent.wrap > div:nth-child('+index+') > div > a').click({timeout:4000});
                } catch (error) {
                
                }
                await delay(8000)
                await incrementarLOG("INDEX: "+index+"- NOME ROLETA: "+nameR+" - MODE: "+mode)
                console.log("INDEX: "+index+"- NOME ROLETA: "+nameR+" - MODE: "+mode)
            
            //COLUNAS----------------------------------------
            if(mode === 1){
                switch (index){
                    case 1:
                        andamento = true
                        while (roleta1[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                
                                NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta1[7])
                                                }
                                                
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                        columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta1[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta1[4] = 0;
                                                    roleta1[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta1[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                        columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta1[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta1[5] = 0;
                                                    roleta1[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta1[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta1[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta1[6] = 0;
                                                    roleta1[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta1[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta1[7])
                                                            roleta1[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta1[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta1[7])
                                                            }else if(roleta1[25] == process.env.COLUMN_QTDJOGADAS){
                                                            roleta1[8] = true
                                                            roleta1[9] = false
                                                            apostando = false
                                                            roletaAndamento = false
                                                            await irLobby()
                                                            }
                                                        }else{
                                                            roleta1[7]++
                                                            if(roleta1[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta1[7])
                                                                await incrementarLOG("GALE "+roleta1[7])
                                                                await fazerAposta(num,roleta1[7])
                                                            }
                                                            if(roleta1[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta1[9] = false
                                                                roleta1[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                                
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta1[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta1[7])
                                                            roleta1[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta1[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta1[7])
                                                            }else if(roleta1[25] == process.env.COLUMN_QTDJOGADAS){
                                                            roleta1[8] = true
                                                            roleta1[9] = false
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta1[4] = 0
                                                            roleta1[7] = 1
                                                            await irLobby()
                                                            }
                                                        }else{
                                                            roleta1[7]++
                                                            if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta1[7])
                                                                await fazerAposta(num,roleta1[7])
                                                            }
                                                            if(roleta1[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta1[9] = false
                                                                roleta1[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta1[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta1[7])
                                                            roleta1[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta1[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta1[7])
                                                            }else if(roleta1[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta1[8] = true
                                                                roleta1[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{roleta1[7]++

                                                            if(roleta1[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta1[7])
                                                                await incrementarLOG("GALE "+roleta1[7])
                                                                await fazerAposta(num,roleta1[7])
                                                            }
                                                            if(roleta1[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta1[9] = false
                                                                roleta1[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta1[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta1[7])
                                                            roleta1[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta1[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta1[7])
                                                            }else if(roleta1[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta1[8] = true
                                                                roleta1[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[5] = 0
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta1[7]++
                                                            if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta1[7])
                                                                await incrementarLOG("GALE "+roleta1[7])
                                                                await fazerAposta(num,roleta1[7])
                                                            }
                                                            if(roleta1[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta1[9] = false
                                                                roleta1[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta1[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta1[7])
                                                            roleta1[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta1[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta1[7])
                                                            }else if(roleta1[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta1[8] = true
                                                                roleta1[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                            await irLobby()
                                                            }
                                                        }else{
                                                            roleta1[7]++
                                                            if(roleta1[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta1[7])
                                                                await incrementarLOG("GALE "+roleta1[7])
                                                                await fazerAposta(num,roleta1[7])
                                                            }
                                                            if(roleta1[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta1[9] = false
                                                                roleta1[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta1[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta1[7])
                                                            roleta1[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta1[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta1[7])
                                                            }else if(roleta1[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta1[8] = true
                                                                roleta1[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[6] = 0
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta1[7]++
                                                            if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta1[7])
                                                                await incrementarLOG("GALE "+roleta1[7])
                                                                await fazerAposta(num,roleta1[7])
                                                            } 
                                                            if(roleta1[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta1[9] = false
                                                                roleta1[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta1[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                                roleta1[25]++
                                                await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta1[7])
                                                roleta1[7] = 1
                                                if(roleta1[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta1[7])
                                                }else if(roleta1[25] == process.env.COLUMN_QTDJOGADAS){
                                                roleta1[8] = true
                                                roleta1[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                roleta1[4] = 0
                                                roleta1[5] = 0
                                                roleta1[6] = 0
                                                roleta1[7] = 1
                                                await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta1[7]++
                                                if(roleta1[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta1[7])
                                                    await incrementarLOG("GALE "+roleta1[7])
                                                    await fazerAposta(num,roleta1[7])
                                                }
                                            }else{
                                                roleta1[7]++
                                                if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta1[7])
                                                    await incrementarLOG("GALE "+roleta1[7])
                                                    await fazerAposta(num,roleta1[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                            } catch (error) {
                            }
                        }                    
                        break;
                    case 4:
                        andamento = true
                        while (roleta4[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                
                                NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                    if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta4[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta4[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta4[4] = 0;
                                                    roleta4[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta4[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta4[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta4[5] = 0;
                                                    roleta4[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta4[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta4[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta4[6] = 0;
                                                    roleta4[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta4[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta4[7])
                                                            roleta4[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta4[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta4[7])
                                                            }else if(roleta4[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta4[8] = true
                                                                roleta4[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta4[7]++
                                                            if(roleta4[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta4[7])
                                                                await incrementarLOG("GALE "+roleta4[7])
                                                                await fazerAposta(num,roleta4[7])
                                                            }
                                                            if(roleta4[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta4[9] = false
                                                                roleta4[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta4[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta4[7])
                                                            roleta4[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta4[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta4[7])
                                                            }else if(roleta4[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta4[8] = true
                                                                roleta4[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[4] = 0
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta4[7]++
                                                            roleta4[7] = 1
                                                            if(roleta4[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta4[7])
                                                                await fazerAposta(num,roleta4[7])
                                                            }
                                                            if(roleta4[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta4[9] = false
                                                                roleta4[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta4[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta4[7])
                                                            roleta4[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta4[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta4[7])
                                                            }else if(roleta4[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta4[8] = true
                                                                roleta4[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta4[7]++
                                                            if(roleta4[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta4[7])
                                                                await incrementarLOG("GALE "+roleta4[7])
                                                                await fazerAposta(num,roleta4[7])
                                                            }
                                                            if(roleta4[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta4[9] = false
                                                                roleta4[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta4[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta4[7])
                                                            roleta4[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta4[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta4[7])
                                                            }else if(roleta4[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta4[8] = true
                                                                roleta4[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[5] = 0
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta4[7]++
                                                            if(roleta4[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta4[7])
                                                                await incrementarLOG("GALE "+roleta4[7])
                                                                await fazerAposta(num,roleta4[7])
                                                            }
                                                            if(roleta4[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta4[9] = false
                                                                roleta4[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta4[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta4[7])
                                                            roleta4[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta4[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta4[7])
                                                            }else if(roleta4[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta4[8] = true
                                                                roleta4[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta4[7]++
                                                            if(roleta4[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta4[7])
                                                                await incrementarLOG("GALE "+roleta4[7])
                                                                await fazerAposta(num,roleta4[7])
                                                            }
                                                            if(roleta4[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta4[9] = false
                                                                roleta4[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta4[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta4[7])
                                                            roleta4[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta4[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta4[7])
                                                            }else if(roleta4[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta4[8] = true
                                                                roleta4[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[6] = 0
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta4[7]++
                                                            if(roleta4[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta4[7])
                                                                await incrementarLOG("GALE "+roleta4[7])
                                                                await fazerAposta(num,roleta4[7])
                                                            } 
                                                            if(roleta4[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta4[9] = false
                                                                roleta4[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta4[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                            roleta4[25]++
                                            await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta4[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta4[7])
                                                roleta4[7] = 1
                                                if(roleta4[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta4[7])
                                                }else if(roleta4[25] == process.env.COLUMN_QTDJOGADAS){
                                                    roleta4[8] = true
                                                    roleta4[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta4[4] = 0
                                                    roleta4[5] = 0
                                                    roleta4[6] = 0
                                                    roleta4[7] = 1
                                                    await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta4[7]++
                                                if(roleta4[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta4[7])
                                                    await incrementarLOG("GALE "+roleta4[7])
                                                    await fazerAposta(num,roleta4[7])
                                                }
                                            }else{
                                                roleta4[7]++
                                                if(roleta4[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta4[7])
                                                    await incrementarLOG("GALE "+roleta4[7])
                                                    await fazerAposta(num,roleta4[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                            } catch (error) {
                            }
                        }                    
                        break;
                    case 6:
                                andamento = true
                                while (roleta6[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                        
                            
                                        NEWnum1 = parseInt(NEWnum1)
                                        NEWnum2 = parseInt(NEWnum2)
                                        NEWnum3 = parseInt(NEWnum3)
                                        NEWnum4 = parseInt(NEWnum4)
                                        
                                        
                                            if(NEWnum1 != ultimonumero && apostando === false){
                                                if(num === 1){
                                                    if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                        if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                            console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                            entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                            await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                            await fazerAposta(num,roleta6[7])
                                                        }
                                                        apostando = true
                                                        num1 = NEWnum1
                                                        num2 = NEWnum2
                                                        num3 = NEWnum3
                                                        num4 = NEWnum4
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                                await fazerAposta(num,roleta6[7])
                                                            }
                                                            apostando = true
                                                            num1 = NEWnum1
                                                            num2 = NEWnum2
                                                            num3 = NEWnum3
                                                            num4 = NEWnum4
                                                            //verificaRoleta()
                                                        }else{
                                                            if(apostando === false){
                                                            console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                            roleta6[4] = 0;
                                                            roleta6[9] = false
                                                            roletaAndamento = false
                                                            await irLobby()
                                                            }
                                                        }
                                                    }
                                                }else if(num === 2){
                                                    if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                        if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                            console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                            entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                            await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                            await fazerAposta(num,roleta6[7])
                                                        }
                                                        apostando = true
                                                        num1 = NEWnum1
                                                        num2 = NEWnum2
                                                        num3 = NEWnum3
                                                        num4 = NEWnum4
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                                await fazerAposta(num,roleta6[7])
                                                            }
                                                            apostando = true
                                                            num1 = NEWnum1
                                                            num2 = NEWnum2
                                                            num3 = NEWnum3
                                                            num4 = NEWnum4
                                                        }else{
                                                            if(apostando === false){
                                                            console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                            roleta6[5] = 0;
                                                            roleta6[9] = false
                                                            roletaAndamento = false
                                                            await irLobby()
                                                            }
                                                        }
                                                    }
                                                }else if(num === 3){
                                                if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                        await fazerAposta(num,roleta6[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                        if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                            console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                            entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                            await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                            await fazerAposta(num,roleta6[7])
                                                        }
                                                            apostando = true
                                                            num1 = NEWnum1
                                                            num2 = NEWnum2
                                                            num3 = NEWnum3
                                                            num4 = NEWnum4
                                                    }else{
                                                        if(apostando === false){
                                                            console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                            roleta6[6] = 0;
                                                            roleta6[9] = false
                                                            roletaAndamento = false
                                                            await irLobby()
                                                        }
                                                    }
                                                    }
                                                }
                                            }
                                        if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                            if(apostando === true){
                                                if(NEWnum1 != 0){
                                                        if(num === 1){
                                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                                if(coluna1.includes(NEWnum1) === false){
                                                                    roleta6[25]++
                                                                    await incrementarVitorias();
                                                                    console.log(sequence("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                                    await incrementarLOG("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                                    editarSinal(nameR,roleta6[7])
                                                                    roleta6[7] = 1
                                                                    if(recuperacao == true){
                                                                        if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                            recuperacao = false
                                                                            recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                        }
                                                                        recuperacaoGALE++
                                                                    }
                                                                    if(roleta6[25] < process.env.COLUMN_QTDJOGADAS){
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }else if(roleta6[25] == process.env.COLUMN_QTDJOGADAS){
                                                                        roleta6[8] = true
                                                                        roleta6[9] = false
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }else{
                                                                    roleta6[7]++
                                                                    if(roleta6[7] < process.env.GALE_DUZIA){
                                                                        console.log("GALE "+roleta6[7])
                                                                        await incrementarLOG("GALE "+roleta6[7])
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }
                                                                    if(roleta6[7] == process.env.GALE_DUZIA){
                                                                        if(process.env.RECUPERACAO === "false"){
                                                                        console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                        await incrementarLOG("APOSTA PERDIDA")
                                                                        }else if(galeTeste>3){
                                                                            recuperacao = false
                                                                            galeTeste = 1
                                                                                console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                                await incrementarLOG("APOSTA PERDIDA")
                                                                        }
                                                                        recuperacao = true
                                                                        await incrementarLOG("APOSTA PERDIDA")
                                                                        roleta6[9] = false
                                                                        roleta6[8] = true
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await incrementarDerrotas();
                                                                        await irLobby()
                                                                    }
                                                                }
                                                            }else{
                                                                if(coluna1.includes(NEWnum1) === true){
                                                                    roleta6[25]++
                                                                    await incrementarVitorias();
                                                                    console.log(sequence("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                                    await incrementarLOG("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                                    editarSinal(nameR)
                                                                    roleta6[7] = 1
                                                                    if(recuperacao == true){
                                                                        if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                            recuperacao = false
                                                                            recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                        }
                                                                        recuperacaoGALE++
                                                                    }
                                                                    if(roleta6[25] < process.env.COLUMN_QTDJOGADAS){
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }else if(roleta6[25] == process.env.COLUMN_QTDJOGADAS){
                                                                        roleta6[8] = true
                                                                        roleta6[9] = false
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[4] = 0
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }else{
                                                                    roleta6[7]++
                                                                    if(roleta6[7] < process.env.GALE_NOT_COLUMN){
                                                                        console.log("GALE "+roleta6[7])
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }
                                                                    if(roleta6[7] == process.env.GALE_NOT_COLUMN){
                                                                        if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                    }else if(galeTeste>3){
                                                                        recuperacao = false
                                                                        galeTeste = 1
                                                                            console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                            await incrementarLOG("APOSTA PERDIDA")
                                                                    }
                                                                        recuperacao = true
                                                                        roleta6[9] = false
                                                                        roleta6[8] = true
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(num === 2){                                                
                                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                                if(coluna2.includes(NEWnum1) === false){
                                                                    roleta6[25]++
                                                                    await incrementarVitorias();
                                                                    console.log(sequence("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                                    await incrementarLOG("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                                    editarSinal(nameR,roleta6[7])
                                                                    roleta6[7] = 1
                                                                    if(recuperacao == true){
                                                                        if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                            recuperacao = false
                                                                            recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                        }
                                                                        recuperacaoGALE++
                                                                    }
                                                                    if(roleta6[25] < process.env.COLUMN_QTDJOGADAS){
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }else if(roleta6[25] == process.env.COLUMN_QTDJOGADAS){
                                                                        roleta6[8] = true
                                                                        roleta6[9] = false
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[5] = 0
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }else{
                                                                    roleta6[7]++
                                                                    if(roleta6[7] < process.env.GALE_DUZIA){
                                                                        console.log("GALE "+roleta6[7])
                                                                        await incrementarLOG("GALE "+roleta6[7])
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }
                                                                    if(roleta6[7] == process.env.GALE_DUZIA){
                                                                        if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                        recuperacao = true
                                                                        roleta6[9] = false
                                                                        roleta6[8] = true
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }
                                                            }else{
                                                                if(coluna2.includes(NEWnum1) === true){
                                                                    roleta6[25]++
                                                                    await incrementarVitorias();
                                                                    console.log(sequence("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                                    await incrementarLOG("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                                    editarSinal(nameR,roleta6[7])
                                                                    roleta6[7] = 1
                                                                    if(recuperacao == true){
                                                                        if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                            recuperacao = false
                                                                            recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                        }
                                                                        recuperacaoGALE++
                                                                    }
                                                                    if(roleta6[25] < process.env.COLUMN_QTDJOGADAS){
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }else if(roleta6[25] == process.env.COLUMN_QTDJOGADAS){
                                                                        roleta6[8] = true
                                                                        roleta6[9] = false
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[5] = 0
                                                                        roleta6[7] = 1
                                                                        await incrementarVitorias();
                                                                        await irLobby()
                                                                    }
                                                                }else{
                                                                    roleta6[7]++
                                                                    if(roleta6[7] < process.env.GALE_NOT_COLUMN){
                                                                        console.log("GALE "+roleta6[7])
                                                                        await incrementarLOG("GALE "+roleta6[7])
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }
                                                                    if(roleta6[7] == process.env.GALE_NOT_COLUMN){
                                                                        if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                        recuperacao = true
                                                                        roleta6[9] = false
                                                                        roleta6[8] = true
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(num === 3){
                                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                                if(coluna3.includes(NEWnum1) === false){
                                                                    roleta6[25]++
                                                                    await incrementarVitorias();
                                                                    console.log(sequence("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                                    await incrementarLOG("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                                    editarSinal(nameR,roleta6[7])
                                                                    roleta6[7] = 1
                                                                    if(recuperacao == true){
                                                                        if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                            recuperacao = false
                                                                            recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                        }
                                                                        recuperacaoGALE++
                                                                    }
                                                                    if(roleta6[25] < process.env.COLUMN_QTDJOGADAS){
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }else if(roleta6[25] == process.env.COLUMN_QTDJOGADAS){
                                                                        roleta6[8] = true
                                                                        roleta6[9] = false
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }else{
                                                                    roleta6[7]++
                                                                    if(roleta6[7] < process.env.GALE_DUZIA){
                                                                        console.log("GALE "+roleta6[7])
                                                                        await incrementarLOG("GALE "+roleta6[7])
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }
                                                                    if(roleta6[7] == process.env.GALE_DUZIA){
                                                                        if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                        recuperacao = true
                                                                        roleta6[9] = false
                                                                        roleta6[8] = true
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }
                                                            }else{
                                                                if(coluna3.includes(NEWnum1) === true){
                                                                    roleta6[25]++
                                                                    await incrementarVitorias();
                                                                    console.log(sequence("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                                    await incrementarLOG("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                                    editarSinal(nameR,roleta6[7])
                                                                    roleta6[7] = 1
                                                                    if(recuperacao == true){
                                                                        if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                            recuperacao = false
                                                                            recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                        }
                                                                        recuperacaoGALE++
                                                                    }
                                                                    if(roleta6[25] < process.env.COLUMN_QTDJOGADAS){
                                                                        await fazerAposta(num,roleta6[7])
                                                                    }else if(roleta6[25] == process.env.COLUMN_QTDJOGADAS){
                                                                        roleta6[8] = true
                                                                        roleta6[9] = false
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[6] = 0
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }else{
                                                                    roleta6[7]++
                                                                    if(roleta6[7] < process.env.GALE_NOT_COLUMN){
                                                                        console.log("GALE "+roleta6[7])
                                                                        await incrementarLOG("GALE "+roleta6[7])
                                                                        await fazerAposta(num,roleta6[7])
                                                                    } 
                                                                    if(roleta6[7] == process.env.GALE_NOT_COLUMN){
                                                                        if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                        recuperacao = true
                                                                        roleta6[9] = false
                                                                        roleta6[8] = true
                                                                        apostando = false
                                                                        roletaAndamento = false
                                                                        roleta6[7] = 1
                                                                        await irLobby()
                                                                    }
                                                                }
                                                            }
                                                        }
                                                }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                                    roleta6[25]++
                                                    await incrementarVitorias();
                                                        console.log(sequence("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        await incrementarLOG("APOSTA GANHA ["+roleta6[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        editarSinal(nameR,roleta6[7])
                                                        roleta6[7] = 1
                                                        if(roleta6[25] < process.env.COLUMN_QTDJOGADAS){
                                                            await fazerAposta(num,roleta6[7])
                                                        }else if(roleta6[25] == process.env.COLUMN_QTDJOGADAS){
                                                            roleta6[8] = true
                                                            roleta6[9] = false
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta6[4] = 0
                                                            roleta6[5] = 0
                                                            roleta6[6] = 0
                                                            roleta6[7] = 1
                                                            await irLobby()
                                                        }
                                                }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        roleta6[7]++
                                                        if(roleta6[7] < process.env.GALE_DUZIA){
                                                            console.log("GALE "+roleta6[7])
                                                            await incrementarLOG("GALE "+roleta6[7])
                                                            await fazerAposta(num,roleta6[7])
                                                        }
                                                    }else{
                                                        roleta6[7]++
                                                        if(roleta6[7] < process.env.GALE_NOT_COLUMN){
                                                            console.log("GALE "+roleta6[7])
                                                            await incrementarLOG("GALE "+roleta6[7])
                                                            await fazerAposta(num,roleta6[7])
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                                    } catch (error) {
                                    }
                                }                    
                                break;                    
                    case 7:
                        andamento = true
                        while (roleta7[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                
                                NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                    if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta7[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta7[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta7[4] = 0;
                                                    roleta7[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta7[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta7[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta7[5] = 0;
                                                    roleta7[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta7[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta7[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta7[6] = 0;
                                                    roleta7[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta7[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta7[7])
                                                            roleta7[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta7[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta7[7])
                                                            }else if(roleta7[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta7[8] = true
                                                                roleta7[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta7[7]++
                                                            if(roleta7[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta7[7])
                                                                await incrementarLOG("GALE "+roleta7[7])
                                                                await fazerAposta(num,roleta7[7])
                                                            }
                                                            if(roleta7[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta7[9] = false
                                                                roleta7[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta7[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta7[7])
                                                            roleta7[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta7[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta7[7])
                                                            }else if(roleta7[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta7[8] = true
                                                                roleta7[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[4] = 0
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta7[7]++
                                                            if(roleta7[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta7[7])
                                                                await fazerAposta(num,roleta7[7])
                                                            }
                                                            if(roleta7[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta7[9] = false
                                                                roleta7[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta7[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta7[7])
                                                            roleta7[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta7[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta7[7])
                                                            }else if(roleta7[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta7[8] = true
                                                                roleta7[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta7[7]++
                                                            if(roleta7[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta7[7])
                                                                await incrementarLOG("GALE "+roleta7[7])
                                                                await fazerAposta(num,roleta7[7])
                                                            }
                                                            if(roleta7[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta7[9] = false
                                                                roleta7[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta7[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta7[7])
                                                            roleta7[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta7[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta7[7])
                                                            }else if(roleta7[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta7[8] = true
                                                                roleta7[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[5] = 0
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta7[7]++
                                                            if(roleta7[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta7[7])
                                                                await incrementarLOG("GALE "+roleta7[7])
                                                                await fazerAposta(num,roleta7[7])
                                                            }
                                                            if(roleta7[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta7[9] = false
                                                                roleta7[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta7[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta7[7])
                                                            roleta7[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta7[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta7[7])
                                                            }else if(roleta7[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta7[8] = true
                                                                roleta7[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta7[7]++
                                                            if(roleta7[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta7[7])
                                                                await incrementarLOG("GALE "+roleta7[7])
                                                                await fazerAposta(num,roleta7[7])
                                                            }
                                                            if(roleta7[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta7[9] = false
                                                                roleta7[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta7[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta7[7])
                                                            roleta7[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta7[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta7[7])
                                                            }else if(roleta7[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta7[8] = true
                                                                roleta7[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[6] = 0
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta7[7]++
                                                            if(roleta7[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta7[7])
                                                                await incrementarLOG("GALE "+roleta7[7])
                                                                await fazerAposta(num,roleta7[7])
                                                            } 
                                                            if(roleta7[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta7[9] = false
                                                                roleta7[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta7[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                                roleta7[25]++
                                                await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta7[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta7[7])
                                                roleta7[7] = 1
                                                if(roleta7[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta7[7])
                                                }else if(roleta7[25] == process.env.COLUMN_QTDJOGADAS){
                                                    roleta7[8] = true
                                                    roleta7[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta7[4] = 0
                                                    roleta7[5] = 0
                                                    roleta7[6] = 0
                                                    roleta7[7] = 1
                                                    await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta7[7]++
                                                if(roleta7[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta7[7])
                                                    await incrementarLOG("GALE "+roleta7[7])
                                                    await fazerAposta(num,roleta7[7])
                                                }
                                            }else{
                                                roleta7[7]++
                                                if(roleta7[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta7[7])
                                                    await incrementarLOG("GALE "+roleta7[7])
                                                    await fazerAposta(num,roleta7[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                            } catch (error) {
                            }
                        }                    
                        break;                               
                    case 9:
                        andamento = true
                        while (roleta9[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                
                                    NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                
                                    if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta9[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta9[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta9[4] = 0;
                                                    roleta9[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta9[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta9[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta9[5] = 0;
                                                    roleta9[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta9[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta9[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta9[6] = 0;
                                                    roleta9[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta9[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta9[7])
                                                            roleta9[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta9[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta9[7])
                                                            }else if(roleta9[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta9[8] = true
                                                                roleta9[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta9[7]++
                                                            if(roleta9[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta9[7])
                                                                await incrementarLOG("GALE "+roleta9[7])
                                                                await fazerAposta(num,roleta9[7])
                                                            }
                                                            if(roleta9[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta9[9] = false
                                                                roleta9[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta9[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta9[7])
                                                            roleta9[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta9[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta9[7])
                                                            }else if(roleta9[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta9[8] = true
                                                                roleta9[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[4] = 0
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta9[7]++
                                                            if(roleta9[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta9[7])
                                                                await fazerAposta(num,roleta9[7])
                                                            }
                                                            if(roleta9[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta9[9] = false
                                                                roleta9[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta9[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta9[7])
                                                            roleta9[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta9[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta9[7])
                                                            }else if(roleta9[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta9[8] = true
                                                                roleta9[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{roleta9[7]++
                    
                                                            if(roleta9[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta9[7])
                                                                await incrementarLOG("GALE "+roleta9[7])
                                                                await fazerAposta(num,roleta9[7])
                                                            }
                                                            if(roleta9[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta9[9] = false
                                                                roleta9[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta9[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta9[7])
                                                            roleta9[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta9[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta9[7])
                                                            }else if(roleta9[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta9[8] = true
                                                                roleta9[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[5] = 0
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta9[7]++
                                                            if(roleta9[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta9[7])
                                                                await incrementarLOG("GALE "+roleta9[7])
                                                                await fazerAposta(num,roleta9[7])
                                                            }
                                                            if(roleta9[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta9[9] = false
                                                                roleta9[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta9[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta9[7])
                                                            roleta9[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta9[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta9[7])
                                                            }else if(roleta9[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta9[8] = true
                                                                roleta9[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta9[7]++
                                                            if(roleta9[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta9[7])
                                                                await incrementarLOG("GALE "+roleta9[7])
                                                                await fazerAposta(num,roleta9[7])
                                                            }
                                                            if(roleta9[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta9[9] = false
                                                                roleta9[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta9[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta9[7])
                                                            roleta9[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta9[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta9[7])
                                                            }else if(roleta9[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta9[8] = true
                                                                roleta9[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[6] = 0
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta9[7]++
                                                            if(roleta9[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta9[7])
                                                                await incrementarLOG("GALE "+roleta9[7])
                                                                await fazerAposta(num,roleta9[7])
                                                            } 
                                                            if(roleta9[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta9[9] = false
                                                                roleta9[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta9[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                            roleta9[25]++
                                            await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta9[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta9[7])
                                                roleta9[7] = 1
                                                if(roleta9[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta9[7])
                                                }else if(roleta9[25] == process.env.COLUMN_QTDJOGADAS){
                                                    roleta9[8] = true
                                                    roleta9[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta9[4] = 0
                                                    roleta9[5] = 0
                                                    roleta9[6] = 0
                                                    roleta9[7] = 1
                                                    await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta9[7]++
                                                if(roleta9[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta9[7])
                                                    await incrementarLOG("GALE "+roleta9[7])
                                                    await fazerAposta(num,roleta9[7])
                                                }
                                            }else{
                                                roleta9[7]++
                                                if(roleta9[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta9[7])
                                                    await incrementarLOG("GALE "+roleta9[7])
                                                    await fazerAposta(num,roleta9[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                            } catch (error) {
                            }
                        }                    
                        break;                            
                    case 10:
                        andamento = true
                        while (roleta10[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                
                    
                                NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                
                                    if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta10[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta10[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta10[4] = 0;
                                                    roleta10[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta10[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta10[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta10[5] = 0;
                                                    roleta10[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta10[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta10[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta10[6] = 0;
                                                    roleta10[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta10[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta10[7])
                                                            roleta10[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta10[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta10[7])
                                                            }else if(roleta10[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta10[8] = true
                                                                roleta10[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta10[7]++
                                                            if(roleta10[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta10[7])
                                                                await incrementarLOG("GALE "+roleta10[7])
                                                                await fazerAposta(num,roleta10[7])
                                                            }
                                                            if(roleta10[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta10[9] = false
                                                                roleta10[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta10[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta10[7])
                                                            roleta10[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta10[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta10[7])
                                                            }else if(roleta10[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta10[8] = true
                                                                roleta10[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[4] = 0
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta10[7]++
                                                            if(roleta10[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta10[7])
                                                                await fazerAposta(num,roleta10[7])
                                                            }
                                                            if(roleta10[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta10[9] = false
                                                                roleta10[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta10[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta10[7])
                                                            roleta10[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta10[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta10[7])
                                                            }else if(roleta10[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta10[8] = true
                                                                roleta10[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{roleta10[7]++
                    
                                                            if(roleta10[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta10[7])
                                                                await incrementarLOG("GALE "+roleta10[7])
                                                                await fazerAposta(num,roleta10[7])
                                                            }
                                                            if(roleta10[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta10[9] = false
                                                                roleta10[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta10[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta10[7])
                                                            roleta10[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta10[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta10[7])
                                                            }else if(roleta10[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta10[8] = true
                                                                roleta10[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[5] = 0
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta10[7]++
                                                            if(roleta10[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta10[7])
                                                                await incrementarLOG("GALE "+roleta10[7])
                                                                await fazerAposta(num,roleta10[7])
                                                            }
                                                            if(roleta10[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta10[9] = false
                                                                roleta10[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta10[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta10[7])
                                                            roleta10[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta10[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta10[7])
                                                            }else if(roleta10[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta10[8] = true
                                                                roleta10[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta10[7]++
                                                            if(roleta10[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta10[7])
                                                                await incrementarLOG("GALE "+roleta10[7])
                                                                await fazerAposta(num,roleta10[7])
                                                            }
                                                            if(roleta10[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta10[9] = false
                                                                roleta10[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta10[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] "))
                                                            await incrementarLOG("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta10[7])
                                                            roleta10[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta10[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta10[7])
                                                            }else if(roleta10[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta10[8] = true
                                                                roleta10[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[6] = 0
                                                                roleta10[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta10[7]++
                                                            if(roleta10[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta10[7])
                                                                await incrementarLOG("GALE "+roleta10[7])
                                                                await fazerAposta(num,roleta10[7])
                                                            } 
                                                            if(roleta10[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta10[9] = false
                                                                roleta10[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta10[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                                roleta10[25]++
                                                await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta10[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta10[7])
                                                roleta10[7] = 1
                                                if(roleta10[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta10[7])
                                                }else if(roleta10[25] == process.env.COLUMN_QTDJOGADAS){
                                                    roleta10[8] = true
                                                    roleta10[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta10[4] = 0
                                                    roleta10[5] = 0
                                                    roleta10[6] = 0
                                                    roleta10[7] = 1
                                                    await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta10[7]++
                                                if(roleta10[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta10[7])
                                                    await incrementarLOG("GALE "+roleta10[7])
                                                    await fazerAposta(num,roleta10[7])
                                                }
                                            }else{
                                                roleta10[7]++
                                                if(roleta10[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta10[7])
                                                    await incrementarLOG("GALE "+roleta10[7])
                                                    await fazerAposta(num,roleta10[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                            } catch (error) {
                            }
                        }                    
                        break;                        
                    case 11:
                        andamento = true
                        while (roleta11[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                
                                NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                    if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta11[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta11[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta11[4] = 0;
                                                    roleta11[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta11[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta11[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta11[5] = 0;
                                                    roleta11[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta11[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta11[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta11[6] = 0;
                                                    roleta11[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta11[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta11[7])
                                                            roleta11[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta11[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta11[7])
                                                            }else if(roleta11[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta11[8] = true
                                                                roleta11[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta11[7]++
                                                            if(roleta11[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta11[7])
                                                                await incrementarLOG("GALE "+roleta11[7])
                                                                await fazerAposta(num,roleta11[7])
                                                            }
                                                            if(roleta11[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta11[9] = false
                                                                roleta11[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta11[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta11[7])
                                                            roleta11[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta11[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta11[7])
                                                            }else if(roleta11[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta11[8] = true
                                                                roleta11[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[4] = 0
                                                                roleta11[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta11[7]++
                                                            if(roleta11[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta11[7])
                                                                await fazerAposta(num,roleta11[7])
                                                            }
                                                            if(roleta11[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta11[9] = false
                                                                roleta11[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta11[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta11[7])
                                                            roleta11[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta11[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta11[7])
                                                            }else if(roleta11[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta11[8] = true
                                                                roleta11[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta11[7]++
                                                            if(roleta11[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta11[7])
                                                                await incrementarLOG("GALE "+roleta11[7])
                                                                await fazerAposta(num,roleta11[7])
                                                            }
                                                            if(roleta11[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta11[9] = false
                                                                roleta11[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta11[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta11[7])
                                                            roleta11[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta11[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta11[7])
                                                            }else if(roleta11[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta11[8] = true
                                                                roleta11[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[5] = 0
                                                                roleta11[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta11[7]++
                                                            if(roleta11[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta11[7])
                                                                await incrementarLOG("GALE "+roleta11[7])
                                                                await fazerAposta(num,roleta11[7])
                                                            }
                                                            if(roleta11[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta11[9] = false
                                                                roleta11[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta11[25]++
                                                            console.log(sequence("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta11[7])
                                                            roleta11[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta11[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta11[7])
                                                            }else if(roleta11[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta11[8] = true
                                                                roleta11[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta11[7]++
                                                            if(roleta11[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta11[7])
                                                                await incrementarLOG("GALE "+roleta11[7])
                                                                await fazerAposta(num,roleta11[7])
                                                            }
                                                            if(roleta11[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta11[9] = false
                                                                roleta11[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta11[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta11[7])
                                                            roleta11[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta11[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta11[7])
                                                            }else if(roleta11[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta11[8] = true
                                                                roleta11[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[6] = 0
                                                                roleta11[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta11[7]++
                                                            if(roleta11[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta11[7])
                                                                await incrementarLOG("GALE "+roleta11[7])
                                                                await fazerAposta(num,roleta11[7])
                                                            } 
                                                            if(roleta11[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta11[9] = false
                                                                roleta11[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta11[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                            roleta11[25]++
                                            await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta11[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta11[7])
                                                roleta11[7] = 1
                                                if(roleta11[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta11[7])
                                                }else if(roleta11[25] == process.env.COLUMN_QTDJOGADAS){
                                                    roleta11[8] = true
                                                    roleta11[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta11[4] = 0
                                                    roleta11[5] = 0
                                                    roleta11[6] = 0
                                                    roleta11[7] = 1
                                                    await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta11[7]++
                                                if(roleta11[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta11[7])
                                                    await incrementarLOG("GALE "+roleta11[7])
                                                    await fazerAposta(num,roleta11[7])
                                                }
                                            }else{
                                                roleta11[7]++
                                                if(roleta11[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta11[7])
                                                    await incrementarLOG("GALE "+roleta11[7])
                                                    await fazerAposta(num,roleta11[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                            } catch (error) {
                            }
                        }                    
                        break;                    
                    case 13:
                        andamento = true
                        while (roleta13[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                
                                NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                    if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta13[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta13[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta13[4] = 0;
                                                    roleta13[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta13[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta13[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta13[5] = 0;
                                                    roleta13[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta13[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta13[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta13[6] = 0;
                                                    roleta13[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta13[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta13[7])
                                                            roleta13[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta13[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta13[7])
                                                            }else if(roleta13[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta13[8] = true
                                                                roleta13[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[4] = 0
                                                                roleta13[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta13[7]++
                                                            if(roleta13[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta13[7])
                                                                await incrementarLOG("GALE "+roleta13[7])
                                                                await fazerAposta(num,roleta13[7])
                                                            }
                                                            if(roleta13[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta13[9] = false
                                                                roleta13[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta13[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta13[7])
                                                            roleta13[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta13[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta13[7])
                                                            }else if(roleta13[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta13[8] = true
                                                                roleta13[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[4] = 0
                                                                roleta13[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta13[7]++
                                                            if(roleta13[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta13[7])
                                                                await fazerAposta(num,roleta13[7])
                                                            }
                                                            if(roleta13[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta13[9] = false
                                                                roleta13[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta13[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta13[7])
                                                            roleta13[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta13[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta13[7])
                                                            }else if(roleta13[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta13[8] = true
                                                                roleta13[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[4] = 0
                                                                roleta13[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{roleta13[7]++
                    
                                                            if(roleta13[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta13[7])
                                                                await incrementarLOG("GALE "+roleta13[7])
                                                                await fazerAposta(num,roleta13[7])
                                                            }
                                                            if(roleta13[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta13[9] = false
                                                                roleta13[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta13[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta13[7])
                                                            roleta13[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta13[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta13[7])
                                                            }else if(roleta13[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta13[8] = true
                                                                roleta13[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[5] = 0
                                                                roleta13[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta13[7]++
                                                            if(roleta13[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta13[7])
                                                                await incrementarLOG("GALE "+roleta13[7])
                                                                await fazerAposta(num,roleta13[7])
                                                            }
                                                            if(roleta13[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta13[9] = false
                                                                roleta13[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta13[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta13[7])
                                                            roleta13[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta13[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta13[7])
                                                            }else if(roleta13[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta13[8] = true
                                                                roleta13[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta13[7]++
                                                            if(roleta13[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta13[7])
                                                                await incrementarLOG("GALE "+roleta13[7])
                                                                await fazerAposta(num,roleta13[7])
                                                            }
                                                            if(roleta13[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta13[9] = false
                                                                roleta13[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta13[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta13[7])
                                                            roleta13[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta13[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta13[7])
                                                            }else if(roleta13[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta13[8] = true
                                                                roleta13[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[6] = 0
                                                                roleta13[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta13[7]++
                                                            if(roleta13[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta13[7])
                                                                await incrementarLOG("GALE "+roleta13[7])
                                                                await fazerAposta(num,roleta13[7])
                                                            } 
                                                            if(roleta13[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta13[9] = false
                                                                roleta13[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta13[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                            roleta13[25]++
                                            await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta13[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta13[7])
                                                roleta13[7] = 1
                                                if(roleta13[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta13[7])
                                                }else if(roleta13[25] == process.env.COLUMN_QTDJOGADAS){
                                                    roleta13[8] = true
                                                    roleta13[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta13[4] = 0
                                                    roleta13[5] = 0
                                                    roleta13[6] = 0
                                                    roleta13[7] = 1
                                                    await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta13[7]++
                                                if(roleta13[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta13[7])
                                                    await incrementarLOG("GALE "+roleta13[7])
                                                    await fazerAposta(num,roleta13[7])
                                                }
                                            }else{
                                                roleta13[7]++
                                                if(roleta13[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta13[7])
                                                    await incrementarLOG("GALE "+roleta13[7])
                                                    await fazerAposta(num,roleta13[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                            } catch (error) {
                            }
                        }                    
                        break;                        
                    case 15:
                        andamento = true
                        while (roleta15[9] === true) {
                            try {
                                NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                            
                                NEWnum1 = parseInt(NEWnum1)
                                NEWnum2 = parseInt(NEWnum2)
                                NEWnum3 = parseInt(NEWnum3)
                                NEWnum4 = parseInt(NEWnum4)
                                
                                    if(NEWnum1 != ultimonumero && apostando === false){
                                        if(num === 1){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta15[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna1.includes(NEWnum1) === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 2/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta15[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                    //verificaRoleta()
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                    roleta15[4] = 0;
                                                    roleta15[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 2){
                                            if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    await fazerAposta(num,roleta15[7])
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                        entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/3 ["+NEWnum1+" ultimo número]\n")
                                                        await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                        await fazerAposta(num,roleta15[7])
                                                    }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                                }else{
                                                    if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 2')
                                                    roleta15[5] = 0;
                                                    roleta15[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                    }
                                                }
                                            }
                                        }else if(num === 3){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                await fazerAposta(num,roleta15[7])
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    entradaConfirmadaBOT("🎰Entrada confirmada🎰\n 💻 "+nameR+"\n 🔰 Coluna 1/2 ["+NEWnum1+" ultimo número]\n")
                                                    await incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    await fazerAposta(num,roleta15[7])
                                                }
                                                    apostando = true
                                                    num1 = NEWnum1
                                                    num2 = NEWnum2
                                                    num3 = NEWnum3
                                                    num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log('ENTRADA CANCELADA NA COLUNA 3')
                                                    roleta15[6] = 0;
                                                    roleta15[9] = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                            }
                                        }
                                    }
                                if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                    if(apostando === true){
                                        if(NEWnum1 != 0){
                                                if(num === 1){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna1.includes(NEWnum1) === false){
                                                            roleta15[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta15[7])
                                                            roleta15[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta15[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta15[7])
                                                            }else if(roleta15[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta15[8] = true
                                                                roleta15[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[4] = 0
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta15[7]++
                                                            if(roleta15[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta15[7])
                                                                await incrementarLOG("GALE "+roleta15[7])
                                                                await fazerAposta(num,roleta15[7])
                                                            }
                                                            if(roleta15[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta15[9] = false
                                                                roleta15[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna1.includes(NEWnum1) === true){
                                                            roleta15[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta15[7])
                                                            roleta15[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta15[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta15[7])
                                                            }else if(roleta15[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta15[8] = true
                                                                roleta15[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[4] = 0
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta15[7]++
                                                            if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta15[7])
                                                                await fazerAposta(num,roleta15[7])
                                                            }
                                                            if(roleta15[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta15[9] = false
                                                                roleta15[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 2){                                                
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna2.includes(NEWnum1) === false){
                                                            roleta15[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta15[7])
                                                            roleta15[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta15[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta15[7])
                                                            }else if(roleta15[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta15[8] = true
                                                                roleta15[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            if(roleta15[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta15[7])
                                                                await incrementarLOG("GALE "+roleta15[7])
                                                                await fazerAposta(num,roleta15[7])
                                                            }
                                                            if(roleta15[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                 
                                                                roleta15[9] = false
                                                                roleta15[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1

                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna2.includes(NEWnum1) === true){
                                                            roleta15[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta15[7])
                                                            roleta15[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta15[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta15[7])
                                                            }else if(roleta15[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta15[8] = true
                                                                roleta15[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[5] = 0
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta15[7]++
                                                            if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta15[7])
                                                                await incrementarLOG("GALE "+roleta15[7])
                                                                await fazerAposta(num,roleta15[7])
                                                            }
                                                            if(roleta15[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta15[9] = false
                                                                roleta15[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                                if(num === 3){
                                                    if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                        if(coluna3.includes(NEWnum1) === false){
                                                            roleta15[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta15[7])
                                                            roleta15[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta15[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta15[7])
                                                            }else if(roleta15[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta15[8] = true
                                                                roleta15[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta15[7]++
                                                            if(roleta15[7] < process.env.GALE_DUZIA){
                                                                console.log("GALE "+roleta15[7])
                                                                await incrementarLOG("GALE "+roleta15[7])
                                                                await fazerAposta(num,roleta15[7])
                                                            }
                                                            if(roleta15[7] == process.env.GALE_DUZIA){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta15[9] = false
                                                                roleta15[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }else{
                                                        if(coluna3.includes(NEWnum1) === true){
                                                            roleta15[25]++
                                                            await incrementarVitorias();
                                                            console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                            await incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                            editarSinal(nameR,roleta15[7])
                                                            roleta15[7] = 1
                                                            if(recuperacao == true){
                                                                if(process.env.MODE_RECUPERACAO == 1 || process.env.MODE_RECUPERACAO == 3 ){
                                                                    recuperacao = false
                                                                    recuperacaoGALE = 0
                                                                    galeTeste = 1
                                                                }
                                                                recuperacaoGALE++
                                                            }
                                                            if(roleta15[25] < process.env.COLUMN_QTDJOGADAS){
                                                                await fazerAposta(num,roleta15[7])
                                                            }else if(roleta15[25] == process.env.COLUMN_QTDJOGADAS){
                                                                roleta15[8] = true
                                                                roleta15[9] = false
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[6] = 0
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }else{
                                                            roleta15[7]++
                                                            if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                                console.log("GALE "+roleta15[7])
                                                                await incrementarLOG("GALE "+roleta15[7])
                                                                await fazerAposta(num,roleta15[7])
                                                            } 
                                                            if(roleta15[7] == process.env.GALE_NOT_COLUMN){
                                                                if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                                recuperacao = true
                                                                roleta15[9] = false
                                                                roleta15[8] = true
                                                                apostando = false
                                                                roletaAndamento = false
                                                                roleta15[7] = 1
                                                                await irLobby()
                                                            }
                                                        }
                                                    }
                                                }
                                        }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                            roleta15[25]++
                                            await incrementarVitorias();
                                                console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                await incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                editarSinal(nameR,roleta15[7])
                                                roleta15[7] = 1
                                                if(roleta15[25] < process.env.COLUMN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta15[7])
                                                }else if(roleta15[25] == process.env.COLUMN_QTDJOGADAS){
                                                    roleta15[8] = true
                                                    roleta15[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta15[4] = 0
                                                    roleta15[5] = 0
                                                    roleta15[6] = 0
                                                    roleta15[7] = 1
                                                    await irLobby()
                                                }
                                        }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                            if(process.env.TYPE_JOGADA == 1){
                                                    columnGALEHORA++
                                                roleta15[7]++
                                                if(roleta15[7] < process.env.GALE_DUZIA){
                                                    console.log("GALE "+roleta15[7])
                                                    await incrementarLOG("GALE "+roleta15[7])
                                                    await fazerAposta(num,roleta15[7])
                                                }
                                            }else{
                                                roleta15[7]++
                                                if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                    console.log("GALE "+roleta15[7])
                                                    await incrementarLOG("GALE "+roleta15[7])
                                                    await fazerAposta(num,roleta15[7])
                                                }
                                            }
                                        }
                                    }
                                }
                                await delay(4000)
                                num1 = NEWnum1
                                num2 = NEWnum2
                                num3 = NEWnum3
                                num4 = NEWnum4
                                } catch (error) {
                                
                                } 
                            }                    
                        break;                        
                }
            }

            // WAVE DOWN--------------------------------------
            if(mode === 2){
                    switch (index) {
                        case 1:
                            while (roleta1[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                        if(permanecerAQUI == true){
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                            } catch (error) {
                                                
                                            }
                                        }
                                } 
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta1[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta1[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta1[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }

                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta1[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta1[24]++
                                                roleta1[13] = 1
                                                if(roleta1[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta1[13],2)
                                                }else if(roleta1[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta1[8] = true
                                                    roleta1[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta1[13] = 1
                                                    roleta1[19] = 0
                                                    roleta1[10] = false
                                                    roleta4[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta1[13] < process.env.SEQUENCIA_WAVE_DOWN ){
                                                    roleta1[13]++
                                                    if(roleta1[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        console.log("GALE "+roleta1[13])
                                                    }
                                                    await fazerAposta(num,roleta1[13],2)
                                                }
                                                if(roleta1[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta1[9] = false
                                                    roleta1[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta1[13] = 1
                                                    roleta1[24] = 0
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;
                        case 4:
                            while (roleta4[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                            await fazerAposta(num,roleta4[13],2)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta4[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta4[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }

                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta4[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta4[24]++
                                                roleta4[13] = 1
                                                if(roleta4[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta4[13],2)
                                                }else if(roleta4[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta4[8] = true
                                                    roleta4[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta4[13] = 1
                                                    roleta4[19] = 0
                                                    roleta4[10] = false
                                                    roleta6[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta4[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                    roleta4[13]++
                                                    if(roleta4[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        console.log("GALE "+roleta4[13])
                                                    }
                                                    await fazerAposta(num,roleta4[13],2)
                                                    
                                                }
                                                if(roleta4[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta4[9] = false
                                                    roleta4[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta4[13] = 1
                                                    roleta4[24] = 0
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;
                        case 6:
                            while (roleta6[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                            await fazerAposta(num,roleta6[13],2)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta6[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta6[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta6[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta6[24]++
                                                roleta6[13] = 1
                                                if(roleta6[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta6[13],2)
                                                }else if(roleta6[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta6[8] = true
                                                    roleta6[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta6[13] = 1
                                                    roleta6[19] = 0
                                                    roleta6[10] = false
                                                    roleta7[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta6[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                    roleta6[13]++
                                                    if(roleta6[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        console.log("GALE "+roleta6[13])
                                                    }
                                                    await fazerAposta(num,roleta6[13],2)
                                                }
                                                if(roleta6[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta6[9] = false
                                                    roleta6[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta6[13] = 1
                                                    roleta6[24] = 0
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;    
                        case 7:
                            while (roleta7[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                            await fazerAposta(num,roleta7[13],2)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta7[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta7[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta7[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta7[24]++
                                                roleta7[13] = 1
                                                if(roleta7[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta7[13],2)
                                                }else if(roleta7[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta7[8] = true
                                                    roleta7[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta7[13] = 1
                                                    roleta7[19] = 0
                                                    roleta7[10] = false
                                                    roleta9[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta7[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                    roleta7[13]++
                                                    if(roleta7[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        console.log("GALE "+roleta7[13])
                                                    }
                                                    await fazerAposta(num,roleta7[13],2)
                                                }
                                                if(roleta7[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta7[9] = false
                                                    roleta7[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta7[13] = 1
                                                    roleta7[24] = 0
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;    
                        case 9:
                            while (roleta9[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                            await fazerAposta(num,roleta9[13],2)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta9[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta9[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta9[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta9[24]++
                                                roleta9[13] = 1
                                                if(roleta9[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta9[13],2)
                                                }else if(roleta9[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta9[8] = true
                                                    roleta9[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta9[13] = 1
                                                    roleta9[19] = 0
                                                    roleta9[10] = false
                                                    roleta10[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta9[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                    roleta9[13]++
                                                    if(roleta9[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        console.log("GALE "+roleta9[13])
                                                    }
                                                    await fazerAposta(num,roleta9[13],2)
                                                }
                                                if(roleta9[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta9[9] = false
                                                    roleta9[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta9[13] = 1
                                                    roleta9[24] = 0
                                                    await irLobby()
                                                      
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;        
                        case 10:
                            while (roleta10[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                            await fazerAposta(num,roleta10[13],2)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false  && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta10[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta10[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta10[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta10[24]++
                                                roleta10[13] = 1
                                                if(roleta10[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta10[13],2)
                                                }else if(roleta10[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta10[8] = true
                                                    roleta10[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta10[13] = 1
                                                    roleta10[19] = 0
                                                    roleta10[10] = false
                                                    roleta11[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta10[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                    roleta10[13]++
                                                    if(roleta10[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        console.log("GALE "+roleta10[13])
                                                    }
                                                    await fazerAposta(num,roleta10[13],2)
                                                }
                                                if(roleta10[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta10[9] = false
                                                    roleta10[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta10[13] = 1
                                                    roleta10[24] = 0
                                                      
                                                    await irLobby()
                                                   }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;            
                        case 11:
                            while (roleta11[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                            
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                            await fazerAposta(num,roleta11[13],2)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta11[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta11[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta11[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta11[24]++
                                                roleta11[13] = 1
                                                if(roleta11[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta11[13],2)
                                                }else if(roleta11[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta11[8] = true
                                                    roleta11[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta11[13] = 1
                                                    roleta11[19] = 0
                                                    roleta11[10] = false
                                                    roleta13[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                    if(roleta11[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        roleta11[13]++
                                                        if(roleta11[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                            console.log("GALE "+roleta11[13])
                                                        }
                                                        await fazerAposta(num,roleta11[13],2)
                                                    }
                                                    if(roleta11[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                        if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                        roleta11[9] = false
                                                        roleta11[8] = true
                                                        apostando = false
                                                        roletaAndamento = false
                                                        roleta11[13] = 1
                                                        roleta11[24] = 0
                                                        await irLobby()
                                                          
                                                    }
                                                }
                                           }
                                        }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;                   
                        case 13:
                            while (roleta13[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta13[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta13[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta13[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta13[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta13[24]++
                                                roleta13[13] = 1
                                                if(roleta13[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta13[13],2)
                                                }else if(roleta13[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta13[8] = true
                                                    roleta13[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta13[13] = 1
                                                    roleta13[19] = 0
                                                    roleta13[10] = false
                                                    roleta15[10] = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta13[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                    roleta13[13]++
                                                    if(roleta13[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        console.log("GALE "+roleta13[13])
                                                    }
                                                    await fazerAposta(num,roleta13[13],2)
                                                }
                                                if(roleta13[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta13[9] = false
                                                    roleta13[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta13[13] = 1
                                                    roleta13[24] = 0
                                                    await irLobby()
                                                      
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;                    
                        case 15:
                            while (roleta15[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEDOWN === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                            await fazerAposta(num,roleta15[13],2)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveDown.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE DOWN "+nameR+" "))
                                                await fazerAposta(num,roleta15[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                //verificaRoleta()
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE DOWN "+nameR+" ")
                                                    roleta15[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }

                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveDown.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta15[13]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta15[24]++
                                                roleta15[13] = 1
                                                if(roleta15[24] < process.env.WAVEDOWN_QTDJOGADAS){
                                                    await fazerAposta(num,roleta15[13],2)
                                                }else if(roleta15[24] == process.env.WAVEDOWN_QTDJOGADAS){
                                                    roleta15[8] = true
                                                    roleta15[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta15[13] = 1
                                                    roleta15[19] = 0
                                                    roleta15[10] = false
                                                    waveResetDown = true
                                                    await irLobby()
                                                }
                                            }else{
                                                    if(roleta15[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                        roleta15[13]++
                                                        if(roleta15[13] < process.env.SEQUENCIA_WAVE_DOWN){
                                                            console.log("GALE "+roleta15[13])
                                                        }
                                                        await fazerAposta(num,roleta15[13],2)
                                                    }
                                                    if(roleta15[13] == process.env.SEQUENCIA_WAVE_DOWN){
                                                        if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                        roleta15[9] = false
                                                        roleta15[8] = true
                                                        apostando = false
                                                        roletaAndamento = false
                                                        roleta15[13] = 1
                                                        roleta15[24] = 0
                                                          
                                                        await irLobby()
                                                    }
                                                }
                                            
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;
                    }
            }

            //WAVE UP------------------------------------------
            if(mode === 3){
                    switch (index) {
                        case 1:
                            while (roleta1[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                        if(offline == true){
                                            await irLobby()
                                        }
                                        let permanecerAQUI = await permenecerROLETA(index)
                                        if(permanecerAQUI == true){
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                            } catch (error) {
                                                
                                            }
                                        }
                                }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta1[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveUp.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                                await fazerAposta(num,roleta1[17],3)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                roleta1[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                                
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta1[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta1[24]++
                                                roleta1[17] = 1
                                                if(roleta1[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta1[17],3)
                                                }else if(roleta1[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta1[8] = true
                                                    roleta1[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta1[17] = 1
                                                    roleta1[18] = 0
                                                    roleta1[14] = false
                                                    roleta4[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }  
                                                }else{
                                                if(roleta1[17] < process.env.SEQUENCIA_WAVE_UP ){
                                                    roleta1[17]++
                                                    await fazerAposta(num,roleta1[17],3)
                                                    if(roleta1[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta1[17])
                                                    }      
                                                }
                                                if(roleta1[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                        console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                    } 
                                                    roleta1[9] = false
                                                    roleta1[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta1[17] = 1
                                                    roleta1[24] = 0
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;
                        case 4:
                            while (roleta4[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                    if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta4[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveUp.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                                await fazerAposta(num,roleta4[17],3)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                    roleta4[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta4[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta4[24]++
                                                roleta4[17] = 1
                                                if(roleta4[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta4[17],3)
                                                }else if(roleta4[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta4[8] = true
                                                    roleta4[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta4[17] = 1
                                                    roleta4[18] = 0
                                                    roleta4[14] = false
                                                    roleta4[14] = false
                                                    roleta6[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta4[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta4[17]++
                                                    if(roleta4[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta4[17])
                                                    }
                                                    await fazerAposta(num,roleta4[17],3)
                                                }
                                                if(roleta4[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                        console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                        await incrementarLOG("APOSTA PERDIDA")
                                                    } 
                                                    roleta4[9] = false
                                                    roleta4[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta4[17] = 1
                                                    roleta4[24] = 0
                                                      
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;
                        case 6:
                            while (roleta6[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                    if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta6[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                }else{
                                    if(NEWnum1 != ultimonumero){
                                        if(waveUp.includes(NEWnum1) === false && apostando === false){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta6[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(apostando === false){
                                                console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                roleta6[9] = false
                                                roletaAndamento = false
                                                apostando = false
                                                await irLobby()  
                                            }
                                        }
                                    }
                                }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta6[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta6[24]++
                                                roleta6[17] = 1
                                                if(roleta6[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta6[17],3)
                                                }else if(roleta6[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta6[8] = true
                                                    roleta6[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta6[17] = 1
                                                    roleta6[18] = 0
                                                    roleta6[14] = false
                                                    roleta7[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                await irLobby()
                                                }
                                            }else{
                                                if(roleta6[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta6[17]++
                                                    if(roleta6[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta6[17])
                                                    }
                                                    await fazerAposta(num,roleta6[17],3)
                                                }
                                                if(roleta6[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                        console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                        await incrementarLOG("APOSTA PERDIDA")
                                                    } 
                                                    roleta6[9] = false
                                                    roleta6[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta6[17] = 1
                                                    roleta6[24] = 0
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;    
                        case 7:
                            while (roleta7[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                        if(offline == true){
                                            await irLobby()
                                        }
                                        let permanecerAQUI = await permenecerROLETA(index)
                                        if(permanecerAQUI == true){
                                            try {
                                                await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                            } catch (error) {
                                                
                                            }
                                        }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                    if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta7[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                }else{
                                    if(NEWnum1 != ultimonumero){
                                        if(waveUp.includes(NEWnum1) === false && apostando === false){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta7[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(apostando === false){
                                                console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                roleta7[9] = false
                                                roletaAndamento = false
                                                apostando = false
                                                await irLobby()   
                                            }
                                        }
                                    }
                                }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta7[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta7[24]++
                                                roleta7[17] = 1
                                                if(roleta7[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta7[17],3)
                                                }else if(roleta7[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta7[8] = true
                                                    roleta7[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta7[17] = 1
                                                    roleta7[18] = 0
                                                    roleta7[14] = false
                                                    roleta9[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta7[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta7[17]++
                                                    if(roleta7[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta7[17])
                                                    }
                                                    await fazerAposta(num,roleta7[17],3)
                                                }
                                                if(roleta7[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                   roleta7[9] = false
                                                    roleta7[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta7[17] = 1
                                                    roleta7[24] = 0
                                                      
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;    
                        case 9:
                            while (roleta9[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                    if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta9[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                }else{
                                    if(NEWnum1 != ultimonumero){
                                        if(waveUp.includes(NEWnum1) === false && apostando === false){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta9[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(apostando === false){
                                                console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                roleta9[9] = false
                                                roletaAndamento = false
                                                apostando = false
                                                await irLobby()   
                                            }
                                            
                                        }
                                    }
                                }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta9[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta9[24]++
                                                roleta9[17] = 1
                                                if(roleta9[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta9[17],3)
                                                }else if(roleta9[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta9[8] = true
                                                    roleta9[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta9[17] = 1
                                                    roleta9[18] = 0
                                                    roleta9[14] = false
                                                    roleta10[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta9[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta9[17]++
                                                    if(roleta9[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta9[17])
                                                    }
                                                    await fazerAposta(num,roleta9[17],3)
                                                }
                                                if(roleta9[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                   roleta9[9] = false
                                                    roleta9[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta9[17] = 1
                                                    roleta9[24] = 0
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                      
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;        
                        case 10:
                            while (roleta10[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                    if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta10[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                }else{
                                    if(NEWnum1 != ultimonumero){
                                        if(waveUp.includes(NEWnum1) === false && apostando === false){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta10[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(apostando === false){
                                                console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                roleta10[9] = false
                                                roletaAndamento = false
                                                apostando = false
                                                await irLobby()  
                                            }
                                        }
                                    }
                                }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta10[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta10[24]++
                                                roleta10[17] = 1
                                                if(roleta10[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta10[17],3)
                                                }else if(roleta10[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta10[8] = true
                                                    roleta10[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta10[17] = 1
                                                    roleta10[18] = 0
                                                    roleta10[14] = false
                                                    roleta11[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta10[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta10[17]++
                                                    if(roleta10[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta10[17])
                                                    }
                                                    await fazerAposta(num,roleta10[17],3)
                                                }
                                                if(roleta10[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                   roleta10[9] = false
                                                    roleta10[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta10[17] = 1
                                                    roleta10[24] = 0
                                                      
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;            
                        case 11:
                            while (roleta11[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                    if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta11[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                }else{
                                    if(NEWnum1 != ultimonumero){
                                        if(waveUp.includes(NEWnum1) === false && apostando === false){
                                        console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                        console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                        await fazerAposta(num,roleta11[17],3)
                                        apostando = true
                                        num1 = NEWnum1
                                        num2 = NEWnum2
                                        num3 = NEWnum3
                                        num4 = NEWnum4
                                        }else{
                                            if(apostando === false){
                                                console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                roleta11[9] = false
                                                roletaAndamento = false
                                                apostando = false
                                                await irLobby()  
                                            }
                                        }
                                    }
                                }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta11[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta11[24]++
                                                roleta11[17] = 1
                                                if(roleta11[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta11[17],3)
                                                }else if(roleta11[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta11[8] = true
                                                    roleta11[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta11[17] = 1
                                                    roleta11[18] = 0
                                                    roleta11[14] = false
                                                    roleta13[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta11[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta11[17]++
                                                    if(roleta11[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta11[17])
                                                    }
                                                    await fazerAposta(num,roleta11[17],3)
                                                }
                                                if(roleta11[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                   roleta11[9] = false
                                                    roleta11[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta11[17] = 1
                                                    roleta11[24] = 0
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                      
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;                   
                        case 13:
                            while (roleta13[9] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                    if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta13[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                }else{
                                    if(NEWnum1 != ultimonumero){
                                        if(waveUp.includes(NEWnum1) === false && apostando === false){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta13[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(apostando === false){
                                                console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                roleta13[9] = false
                                                roletaAndamento = false
                                                apostando = false
                                                await irLobby()  
                                            }
                                        }
                                    }
                                }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta13[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta13[24]++
                                                roleta13[17] = 1
                                                if(roleta13[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta13[17],3)
                                                }else if(roleta13[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta13[8] = true
                                                    roleta13[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta13[17] = 1
                                                    roleta13[18] = 0
                                                    roleta13[14] = false
                                                    roleta15[14] = true
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta13[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta13[17]++
                                                    if(roleta13[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta13[17])
                                                    }
                                                    await fazerAposta(num,roleta13[17],3)
                                                }
                                                if(roleta13[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                   roleta13[9] = false
                                                    roleta13[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta13[17] = 1
                                                    roleta13[24] = 0
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                      
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;                    
                        case 15:
                            while (roleta15[16] === true) {
                                    try {
                                        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                        NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                        NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                        NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                    } catch (error) {
                                        let offline = await roletaOFF(index)
                                            if(offline == true){
                                                await irLobby()
                                            }
                                            let permanecerAQUI = await permenecerROLETA(index)
                                            if(permanecerAQUI == true){
                                                try {
                                                    await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                                } catch (error) {
                                                    
                                                }
                                            }
                                    }
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                                    if(process.env.CONFIRMA_WAVEUP === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta15[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(waveUp.includes(NEWnum1) === false && apostando === false){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA WAVE UP "+nameR+" "))
                                            await fazerAposta(num,roleta15[17],3)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                    console.log("ENTRADA CANCELADA WAVE UP "+nameR+" ")
                                                    roleta15[9] = false
                                                    roletaAndamento = false
                                                    apostando = false
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(waveUp.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta15[17]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta15[24]++
                                                roleta15[17] = 1
                                                if(roleta15[24] < process.env.WAVEUP_QTDJOGADAS){
                                                    await fazerAposta(num,roleta15[17],3)
                                                }else if(roleta15[24] == process.env.WAVEUP_QTDJOGADAS){
                                                    win++
                                                    roleta15[8] = true
                                                    roleta15[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta15[17] = 1
                                                    roleta15[18] = 0
                                                    roleta15[14] = false
                                                    waveResetUp = true
                                                    await irLobby()
                                                }
                                            }else{
                                                if(roleta15[17] < process.env.SEQUENCIA_WAVE_UP){
                                                    roleta15[17]++
                                                    if(roleta15[17] < process.env.SEQUENCIA_WAVE_UP){
                                                        console.log("GALE "+roleta15[17])
                                                    }
                                                    await fazerAposta(num,roleta15[17],3)
                                                }
                                                if(roleta15[17] == process.env.SEQUENCIA_WAVE_UP){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                   roleta15[9] = false
                                                    roleta15[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta15[17] = 1
                                                    roleta15[24] = 0
                                                      
                                                    modo3 = false
                                                    modo4 = true
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;
                    }
                
            }

            //TEMINAIS-----------------------------------------                                
            if(mode === 4){
                    switch (index) {
                        case 1:
                            while (roleta1[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(NEWnum1 != ultimonumero){
                                            if(apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA TERMINAL 2 "+nameR+" "))
                                                //await fazerAposta(num,roleta1[13],2)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                //verificaRoleta()
                                            }else{
                                                if(apostando === false){
                                                //console.log('ENTRADA CANCELADA NA COLUNA 1')
                                                roleta1[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                            if(terminal2.includes(NEWnum1) === true){
                                                console.log(sequence("APOSTA GANHA ["+roleta1[20]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                win++
                                                roleta1[8] = true
                                                roleta1[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                roleta1[20] = 0
                                                await irLobby()
                                            }else{
                                                if(roleta1[20] < process.env.SEQUENCE_TERMINAL2 ){
                                                    roleta1[20]++
                                                    if(roleta1[20] < process.env.SEQUENCE_TERMINAL2){
                                                        console.log("GALE "+roleta1[20])
                                                    }
                                                    
                                                    //await fazerAposta(num,roleta1[20],2)
                                                }
                                                if(roleta1[20] == process.env.SEQUENCE_TERMINAL2){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta1[9] = false
                                                    roleta1[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta1[20] = 0
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }                    
                            break;
                    
                    }
            }
            
            //VIZINHOS DO ZERO---------------------------------
            if(mode === 5){
                    switch (index) {
                        case 1:
                            while (roleta1[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta1[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta1[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta1[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta1[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta1[8] = true
                                                    roleta1[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta1[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta1[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta1[23]++
                                                    await fazerAposta(num,roleta1[23],5)
                                                    if(roleta1[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta1[23])
                                                    }      
                                                }
                                                if(roleta1[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta1[9] = false
                                                    roleta1[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta1[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break; 
                        case 4:
                            while (roleta4[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                }

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta4[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta4[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta4[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta4[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta4[8] = true
                                                    roleta4[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta4[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta4[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta4[23]++
                                                    await fazerAposta(num,roleta4[23],5)
                                                    if(roleta4[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta4[23])
                                                    }      
                                                }
                                                if(roleta4[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta4[9] = false
                                                    roleta4[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta4[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break; 
                        case 6:
                            while (roleta6[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta6[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta6[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta6[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta6[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta6[8] = true
                                                    roleta6[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta6[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta6[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta6[23]++
                                                    await fazerAposta(num,roleta6[23],5)
                                                    if(roleta6[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta6[23])
                                                    }      
                                                }
                                                if(roleta6[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta6[9] = false
                                                    roleta6[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta6[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break;     
                        case 7:
                            while (roleta7[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta7[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta7[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta7[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta7[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta7[8] = true
                                                    roleta7[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta7[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta7[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta7[23]++
                                                    await fazerAposta(num,roleta7[23],5)
                                                    if(roleta7[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta7[23])
                                                    }      
                                                }
                                                if(roleta7[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta7[9] = false
                                                    roleta7[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta7[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break;                         
                        case 9:
                            while (roleta9[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta9[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta9[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta9[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta9[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta9[8] = true
                                                    roleta9[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta9[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta9[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta9[23]++
                                                    await fazerAposta(num,roleta9[23],5)
                                                    if(roleta9[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta9[23])
                                                    }      
                                                }
                                                if(roleta9[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta9[9] = false
                                                    roleta9[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta9[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break; 
                        case 10:
                            while (roleta10[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta10[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta10[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta10[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta10[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta10[8] = true
                                                    roleta10[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta10[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta10[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta10[23]++
                                                    await fazerAposta(num,roleta10[23],5)
                                                    if(roleta10[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta10[23])
                                                    }      
                                                }
                                                if(roleta10[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta10[9] = false
                                                    roleta10[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta10[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break; 
                        case 11:
                            while (roleta11[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta11[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta11[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta11[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta11[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta11[8] = true
                                                    roleta11[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta11[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta11[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta11[23]++
                                                    await fazerAposta(num,roleta11[23],5)
                                                    if(roleta11[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta11[23])
                                                    }      
                                                }
                                                if(roleta11[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta11[9] = false
                                                    roleta11[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta11[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break;                            
                        case 13:
                            while (roleta13[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                }

                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta13[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta13[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta13[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta13[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta13[8] = true
                                                    roleta13[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta13[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta13[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta13[23]++
                                                    await fazerAposta(num,roleta13[23],5)
                                                    if(roleta13[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta13[23])
                                                    }      
                                                }
                                                if(roleta13[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta13[9] = false
                                                    roleta13[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta13[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break; 
                        case 15:
                            while (roleta15[9] === true) {
                                try {
                                    NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                                    NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                                    NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                                    NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                                } catch (error) {
                                    let offline = await roletaOFF(index)
                                    if(offline == true){
                                        await irLobby()
                                    }
                                    let permanecerAQUI = await permenecerROLETA(index)
                                    if(permanecerAQUI == true){
                                        try {
                                            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div > div > div.pause-session-actions > button.yes.pause-session-button > span').click({timeout:3000});
                                        } catch (error) {
                                            
                                        }
                                    }
                                } 
                                    NEWnum1 = parseInt(NEWnum1)
                                    NEWnum2 = parseInt(NEWnum2)
                                    NEWnum3 = parseInt(NEWnum3)
                                    NEWnum4 = parseInt(NEWnum4)
                        
                                    if(process.env.CONFIRMA_VZ0 === "false" && apostando === false){
                                        if(NEWnum1 != ultimonumero){
                                            console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                            console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                            await fazerAposta(num,roleta15[23],5)
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }
                                    }else{
                                        if(NEWnum1 != ultimonumero){
                                            if(vzdozero.includes(NEWnum1) === false && apostando === false){
                                                console.log(NEWnum1+" "+NEWnum2+" "+NEWnum3+" "+NEWnum4+" MODE "+mode+", ID:"+index+" ROLETA :" +nameR+" ")
                                                console.log(protecao("ENTRADA CONFIRMADA VIZINHO DO ZERO "+nameR+" "))
                                                await fazerAposta(num,roleta15[23],5)
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                            }else{
                                                if(apostando === false){
                                                console.log("ENTRADA CANCELADA VIZINHO DO ZERO "+nameR+" ")
                                                roleta15[9] = false
                                                apostando = false
                                                roletaAndamento = false
                                                await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    if(NEWnum1 != num1 || NEWnum2 != num2 || NEWnum3 != num3 || NEWnum4 != num4){
                                        if(apostando === true){
                                                if(vzdozero.includes(NEWnum1) === true ){
                                                    console.log(sequence("APOSTA GANHA ["+roleta15[23]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                    win++
                                                    roleta15[8] = true
                                                    roleta15[9] = false
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta15[23] = 1
                                                    await irLobby()
                                                }else{
                                                if(roleta15[23] < process.env.SEQUENCIA_VZ ){
                                                    roleta15[23]++
                                                    await fazerAposta(num,roleta15[23],5)
                                                    if(roleta15[23] < process.env.SEQUENCIA_VZ){
                                                        console.log("GALE "+roleta15[23])
                                                    }      
                                                }
                                                if(roleta15[23] == process.env.SEQUENCIA_VZ){
                                                    if(process.env.RECUPERACAO === "false"){
                                                                    console.log(red("APOSTA PERDIDA"));
                                                                    editarSinal(nameR,4)
                                                                    await incrementarLOG("APOSTA PERDIDA")
                                                                    await incrementarDerrotas()
                                                                } 
                                                    roleta15[9] = false
                                                    roleta15[8] = true
                                                    apostando = false
                                                    roletaAndamento = false
                                                    roleta15[23] = 1
                                                      
                                                    await irLobby()
                                                }
                                            }
                                        }
                                    }
                                    await delay(1000)
                                    num1 = NEWnum1
                                    num2 = NEWnum2
                                    num3 = NEWnum3
                                    num4 = NEWnum4
                            }            
                            break; 
                        }
            }
    }
    async function fecharBrowser(){
        if (browser) {
            //await page.waitForNavigation();
            await browser.close();
            //process.exit();
            browserAtivo = false
        }
    }
})

bot.launch()
    
