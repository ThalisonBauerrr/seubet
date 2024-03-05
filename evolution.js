/**
1-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/59277-420032780-ftn-roulette?provider=PRG%2CPOP&mode=real
2-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/24630-3500419-mega-roulette?provider=PRG%2CPOP&mode=real
3-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/20656-3330041-roulette-azure?provider=PRG%2CPOP&mode=real
4-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/41700-400043107-powerup-roulette?provider=PRG%2CPOP&mode=real
5-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/55366-420031093-lucky-6-roulette?provider=PRG%2CPOP&mode=real
6-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/32574-4000316-vip-roulette---the-club?provider=PRG%2CPOP&mode=real
7-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/14205-3300910-roulette-green?provider=PRG%2CPOP&mode=real
8-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/25881-3320006-turkish-roulette?provider=PRG%2CPOP&mode=real
9-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/27612-33102922-roulette-macao?provider=PRG%2CPOP&mode=real
10-https://www.seubet.com/cassino-ao-vivo/slots/all/28/pragmatic-play-live/43536-400043112-spanish-roulette?provider=PRG%2CPOP&mode=real


XTREME
#XxxtremeLigh0001\:ql62qfef4zgdefna\:\:roulette
#XxxtremeLigh0001\:ql62qfef4zgdefna
#XxxtremeLigh0001\:ql62qfef4zgdefna > article
#XxxtremeLigh0001\:ql62qfef4zgdefna > article > div.Info--7f185.clickable--f7401.tile--9c0fc > div.InfoRow--61012.InfoRowMain--5b712 > p
#XxxtremeLigh0001\:ql62qfef4zgdefna > article > div.AspectRatioGridBox--6a07a.TableTile--44b35.clickable--43bab.Format4to3--c329d > div.TableTileFooter--6946e.animate--5dfe8.shadow--f2275 > div.History--09963.tile--9ba18.shortended--405dc > div > div > div:nth-child(1) > svg




 */


require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const fs = require('file-system')
//chromium-firefox-webkit
const {chromium} = require('playwright')
const delay = require('delay')
const color = require('colors-cli/safe')
//nodemon -x 'node pragmatic.js || copy /b pragmatic.js +,,'
const url = "https://www.seubet.com/";
(async () => {

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

    global.apostando = false
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

//                      0       1     2     3       4       5       6     7  8     9    10   11    12  13 14   15   16  17  18  19  20  21  22  23  24
    global.roleta1 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,true,true,false,1,true,true,false,1,  0,  0,  0,true, 0, 0,  0]
    global.roleta2 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0]
    global.roleta3 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0]
    global.roleta4 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0]
    global.roleta5 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0,  0,  0,false,0, 0,  0]
    global.roleta6 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0]
    global.roleta7 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0]
    global.roleta8 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0]
    global.roleta9 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0]
    global.roleta10 = ["num1","num2","num3","num4",column1,column2,column3,1,true,false,false,true,false,1,false,true,false,1,0, 0,  0,false,0, 0,  0]

    global.contcoluna1 = 0
    global.contcoluna2 = 0
    global.contcoluna3 = 0

    global.modo1 = true
    global.modo2 = false
    global.modo3 = false
    global.modo4 = false

    global.lobbyCrash = false; 
    global.recuperacao = false;
    global.recuperacaoGALE = 0

    global.banca = 0
    global.win = 0
    global.loss = 0
    global.statu = ""
    const browser  = await chromium.launch({    
        headless: false
        });
    const page = await browser.newPage() 
    await page.goto(url, { waitUntil: 'load', timeout: 15000 });
    await delay(5000)
    //await page.pause()
    await page.getByRole('button', { name: 'Entrar' }).click();
    await page.getByPlaceholder('Informe seu usuário').click();
    await page.getByPlaceholder('Informe seu usuário').fill('thalisonbauer@hotmail.com');
    await page.getByPlaceholder('Informe sua senha').fill('P5pe@123');
    await page.getByRole('dialog').getByRole('button', { name: 'Entrar' }).click();
    await delay(7000)
    await page.goto("https://www.seubet.com/cassino-ao-vivo/slots/all/28/evolution/45857-420015700-roleta-rel%C3%A2mpago?provider=EVL&mode=real")
    function criarArquivo() {
        const hoje = new Date();
        const dia = hoje.getDate();
        const mes = hoje.getMonth() + 1; 
        const ano = hoje.getFullYear();

        global.arquivo = "./logs/evolution/"+dia+"-"+mes+"-"+ano+".txt"
        global.arquivoLOG = "./logs/evolution/"+dia+"-"+mes+"-"+ano+"LOG.txt"
        if (!fs.existsSync(arquivo)) {
            fs.writeFileSync(arquivo, 'WINNER: 0\nLOSS: 0', 'utf8');
            console.log('Arquivo criado com sucesso!');
        }
        if (!fs.existsSync(arquivoLOG)) {
            fs.writeFileSync(arquivoLOG,'','utf8');
            console.log('Arquivo criado com sucesso!');
        }

    }
    async function incrementarVitorias() {
        criarArquivo()
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
        criarArquivo()
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
        criarArquivo()
        try{
            content = content+"\n"
            fs.writeFile(arquivoLOG, content, { flag: 'a+' }, err => {});
        } catch (err) {
        }
    }
    async function reset(){
        roletaAndamento = false
        apostando = false
    }
    async function irLobby(){
        reset()
        await delay(10000)
        await page.pause()
        //await page.waitForXPath('//div[@class="close-game"]');
        try {
            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').getByText('Ok').click({timeout:2000});
        } catch (error) {
            
        }
        try {
            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('#close-game path').click({timeout:2000});
        } catch (error) {
            console.log(error)
        }
        try {
            await delay(10000)
            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li').filter({ hasText: /^Roleta$/ }).click();
        } catch (error) {
            
        }

        await delay(5000)
        lobbyCrash = true
    }
    async function contagem(mode,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8){
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

                let numero = [numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8]
                for (let index = 0; index < 9; index++) {

                    if(coluna1.includes(numero[index]) === true){
                        contcoluna1++

                    }else if(coluna2.includes(numero[index]) === true){
                        contcoluna2++

                    }else if(coluna3.includes(numero[index]) === true){
                        contcoluna3++

                    }
                }
                if(process.env.MODE == 1){
                    if(contcoluna1>contcoluna2){
                        if(contcoluna1>contcoluna3){
                            return Promise.resolve(1)
                        }else{
                            return Promise.resolve(3)
                        }
                    }else{
                        if(contcoluna2>contcoluna3){
                            return Promise.resolve(2)
                        }else{
                            return Promise.resolve(3)
                        }
                    }
                }else if(process.env.MODE == 2){
                    if(contcoluna1<contcoluna2){
                        if(contcoluna1<contcoluna3){
                            return Promise.resolve(1)
                        }else{
                            return Promise.resolve(3)
                        }
                    }else{
                        if(contcoluna2<contcoluna3){
                            return Promise.resolve(2)
                        }else{
                            return Promise.resolve(3)
                        }
                    }
                    modeTeste =2
                }

            break;
        }
    }
    async function analisandoLobby(){
        for (let index = 1; index < 11; index++) {
            switch (index) {
                case 1:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(1) > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(2) > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(3) > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(4) > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(5) > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(6) > span').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(7) > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-230a47 > div.table-stats > div > div > table > tbody > tr > td:nth-child(8) > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 2:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(1) > svg > g > text').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(2) > svg > g > text').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(3) > svg > g > text').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(4) > svg > g > text').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(5) > svg > g > text').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(6) > svg > g > text').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(7) > svg > g > text').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-204 > div.table-stats > div > div:nth-child(8) > svg > g > text').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 3:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(1) > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(2) > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(3) > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(4) > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(5) > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(6) > span').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(7) > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-227 > div.table-stats > div > div > table > tbody > tr > td:nth-child(8) > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 4:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(1) > div > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(2) > div > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(3) > div > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(4) > div > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(5) > div > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(6) > div > span+').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(7) > div > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-240 > div.table-stats > div > ul > li:nth-child(8) > div > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 5:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(1) > svg > g > text').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(2) > svg > g > text').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(3) > svg > g > text').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(4) > svg > g > text').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(5) > svg > g > text').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(6) > svg > g > text').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(7) > svg > g > text').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-211a1 > div.table-stats > div > div:nth-child(8) > svg > g > text').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 6:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(1) > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(2) > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(3) > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(4) > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(5) > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(6) > span').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(7) > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-545 > div.table-stats > div > div > table > tbody > tr > td:nth-child(8) > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 7:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(1) > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(2) > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(3) > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(4) > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(5) > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(6) > span').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(7) > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-201 > div.table-stats > div > div > table > tbody > tr > td:nth-child(8) > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 8:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(1) > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(2) > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(3) > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(4) > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(5) > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(6) > span').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(7) > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-224a15 > div.table-stats > div > div > table > tbody > tr > td:nth-child(8) > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 9:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(1) > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(2) > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(3) > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(4) > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(5) > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(6) > span').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(7) > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-206 > div.table-stats > div > div > table > tbody > tr > td:nth-child(8) > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
                case 10:
                    try {
                        var nameRoleta = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-detailes > div').textContent({timeout:500});
                        var numero1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(1) > span').textContent({timeout:500});
                        var numero2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(2) > span').textContent({timeout:500});
                        var numero3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(3) > span').textContent({timeout:500});
                        var numero4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(4) > span').textContent({timeout:500});
                        var numero5 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(5) > span').textContent({timeout:500});
                        var numero6 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(6) > span').textContent({timeout:500});
                        var numero7 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(7) > span').textContent({timeout:500});
                        var numero8 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('li.lobbyList.lobby-roulette.lobby-234 > div.table-stats > div > div > table > tbody > tr > td:nth-child(8) > span').textContent({timeout:500});
                    } catch (error) {
                        
                    }
                break;
            }
            numero1 = parseInt(numero1)
            numero2 = parseInt(numero2)
            numero3 = parseInt(numero3)
            numero4 = parseInt(numero4)
            numero5 = parseInt(numero5)
            numero6 = parseInt(numero6)
            numero7 = parseInt(numero7)
            numero8 = parseInt(numero8)
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

                            if(process.env.REPETION_COLUMN === "true" && roleta1[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta1[9] = true
                                roleta1[21] = false
                                roleta2[21] = true
                                entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
                        }
                        break;
                    case 2:
                        if(roleta2[8] == true){
                            roleta2[0] = numero1
                            roleta2[1] = numero2
                            roleta2[2] = numero3
                            roleta2[3] = numero4
                            roleta2[8] = false
                        }else if(roleta2[8] == false && numero1 != roleta2[0] && numero2 != roleta2[1] && numero3 != roleta2[2] ){
                            roleta2[0] = numero1
                            roleta2[1] = numero2
                            roleta2[2] = numero3
                            roleta2[3] = numero4

                            if(process.env.REPETION_COLUMN === "true" && roleta2[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta2[9] = true
                                roleta2[21] = false
                                roleta3[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
                        }
                        break;
                    case 3:
                        if(roleta3[8] == true){
                            roleta3[0] = numero1
                            roleta3[1] = numero2
                            roleta3[2] = numero3
                            roleta3[3] = numero4
                            roleta3[8] = false
                        }else if(roleta3[8] == false && numero1 != roleta3[0] && numero2 != roleta3[1] && numero3 != roleta3[2] ){
                            roleta3[0] = numero1
                            roleta3[1] = numero2
                            roleta3[2] = numero3
                            roleta3[3] = numero4

                            if(process.env.REPETION_COLUMN === "true" && roleta3[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta3[9] = true
                                roleta3[21] = false
                                roleta4[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
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

                            if(process.env.REPETION_COLUMN === "true" && roleta4[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta4[9] = true
                                roleta4[21] = false
                                roleta5[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
                        }
                        break;
                    case 5:
                        if(roleta5[8] == true){
                            roleta5[0] = numero1
                            roleta5[1] = numero2
                            roleta5[2] = numero3
                            roleta5[3] = numero4
                            roleta5[8] = false
                        }else if(roleta5[8] == false && numero1 != roleta5[0] && numero2 != roleta5[1] && numero3 != roleta5[2] ){
                            roleta5[0] = numero1
                            roleta5[1] = numero2
                            roleta5[2] = numero3
                            roleta5[3] = numero4

                            if(process.env.REPETION_COLUMN === "true" && roleta5[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta5[9] = true
                                roleta5[21] = false
                                roleta6[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
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

                            if(process.env.REPETION_COLUMN === "true" && roleta6[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta6[9] = true
                                roleta6[21] = false
                                roleta7[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
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

                            if(process.env.REPETION_COLUMN === "true" && roleta7[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta7[9] = true
                                roleta7[21] = false
                                roleta8[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
                        }
                        break;
                    case 8:
                        if(roleta8[8] == true){
                            roleta8[0] = numero1
                            roleta8[1] = numero2
                            roleta8[2] = numero3
                            roleta8[3] = numero4
                            roleta8[8] = false
                        }else if(roleta8[8] == false && numero1 != roleta8[0] && numero2 != roleta8[1] && numero3 != roleta8[2] ){
                            roleta8[0] = numero1
                            roleta8[1] = numero2
                            roleta8[2] = numero3
                            roleta8[3] = numero4

                            if(process.env.REPETION_COLUMN === "true" && roleta8[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta8[9] = true
                                roleta8[21] = false
                                roleta9[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
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

                            if(process.env.REPETION_COLUMN === "true" && roleta9[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta9[9] = true
                                roleta9[21] = false
                                roleta10[21] = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
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

                            if(process.env.REPETION_COLUMN === "true" && roleta10[21] === true){
                                const cont = await contagem(20,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8)
                                if(process.env.MODE == 1){
                                    console.log("COLUNA MAIS SAIDA É "+cont)
                                }else if(process.env.MODE == 2){
                                    console.log("COLUNA MENOS SAIDA É "+cont)
                                }
                                roletaAndamento = true
                                roleta10[9] = true
                                roleta10[21] = false
                                repeatColunReset = true
                                //entraRoleta(index,cont,numero1,nameRoleta,1)
                            }
                            //console.log(nameRoleta+" - "+roleta1[0]+" - "+ roleta1[1])
                        }
                        break;
                }
            }

            //console.log(numero1+"-"+numero2+"-"+numero3+"-"+numero4+"-"+numero5+"-"+numero6+"-"+numero7+"-"+numero8+" "+nameRoleta)
        }
    }
    async function entraRoleta(index,num,ultimonumero,nameR,mode){
        
        mode = parseInt(mode)
        
        //console.log(mode)
        try {
            await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('#ROULETTE div').filter({ hasText: nameR }).first().click({timeout:3000});
        } catch (error) {
        console.log(error)
        }
        await delay(3000)
        incrementarLOG("INDEX: "+index+"- NOME ROLETA: "+nameR+" - MODE: "+mode)
        console.log("INDEX: "+index+" - NOME ROLETA:"+nameR+" - MODE: "+mode)
        NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('canvas').textContent({
            position: {
              x: 70,
              y: 1058
            }
          });
          console.log(NEWnum1)
        await page.pause()
        /** 
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
                        } catch (error) {
                        } 
                
                            NEWnum1 = parseInt(NEWnum1)
                            NEWnum2 = parseInt(NEWnum2)
                            NEWnum3 = parseInt(NEWnum3)
                            NEWnum4 = parseInt(NEWnum4)
                            
                            if(process.env.TESTE === "false" && apostando === false && andamento === true && process.env.CONFIRMA_NOTCOLUMN === "false"){
                                    try {
                                        let apostasAberta  = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator(' div.g-state.betting-time > div > div.toast > div.toast-in > div.toast-title > span.toast-title-in').textContent({timeout:500});        
                                        if(apostasAberta === "Faça suas apostas, por favor"){
                                            switch (num) {
                                                case 1:
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    fazerAposta(num,roleta1[7],20)
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                break;
                                                case 2:
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    fazerAposta(num,roleta1[7],20)
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                break;
                                                case 3:
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    fazerAposta(num,roleta1[7],20)
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                break;
                                            }
                                        }
                                    } catch (error) {
                                        //console.log("nao conseguiu apostar")
                                        andamento = false
                                    } 
                            }else{
                                if(NEWnum1 != ultimonumero && apostando === false){
                                    if(num === 1){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                fazerAposta(num,roleta1[7],20)
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna1.includes(NEWnum1) === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    fazerAposta(num,roleta1[7],20)
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
                                                irLobby()
                                                }
                                            }
                                        }
                                    }else if(num === 2){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                fazerAposta(num,roleta1[7],20)
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    fazerAposta(num,roleta1[7],20)
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
                                                irLobby()
                                                }
                                            }
                                        }
                                    }else if(num === 3){
                                    if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                        if(process.env.TYPE_JOGADA == 1){
                                            console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                            incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                            fazerAposta(num,roleta1[7],20)
                                        }
                                        apostando = true
                                        num1 = NEWnum1
                                        num2 = NEWnum2
                                        num3 = NEWnum3
                                        num4 = NEWnum4
                                    }else{
                                        if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                            if(process.env.TYPE_JOGADA == 1){
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                fazerAposta(num,roleta1[7],20)
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
                                                irLobby()
                                            }
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
                                                    if(coluna1.includes(NEWnum1) === false){
                                                        console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta1[8] = true
                                                        roleta1[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta1[4] = 0
                                                        roleta1[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta1[7]++
                                                        if(roleta1[7] < process.env.GALE_DUZIA){
                                                            console.log("GALE "+roleta1[7])
                                                            incrementarLOG("GALE "+roleta1[7])
                                                            fazerAposta(num,roleta1[7],20)
                                                        }
                                                        if(roleta1[7] == process.env.GALE_DUZIA){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta1[9] = false
                                                            roleta1[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta1[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }else{
                                                    if(coluna1.includes(NEWnum1) === true){
                                                        console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta1[8] = true
                                                        roleta1[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta1[4] = 0
                                                        roleta1[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta1[7]++
                                                        if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                            console.log("GALE "+roleta1[7])
                                                            fazerAposta(num,roleta1[7],1)
                                                        }
                                                        if(roleta1[7] == process.env.GALE_NOT_COLUMN){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta1[9] = false
                                                            roleta1[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta1[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }
                                            }
                                            if(num === 2){                                                
                                                if(process.env.TYPE_JOGADA == 1){
                                                    if(coluna2.includes(NEWnum1) === false){
                                                        console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta1[8] = true
                                                        roleta1[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta1[4] = 0
                                                        roleta1[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{roleta1[7]++

                                                        if(roleta1[7] < process.env.GALE_DUZIA){
                                                            console.log("GALE "+roleta1[7])
                                                            incrementarLOG("GALE "+roleta1[7])
                                                            fazerAposta(num,roleta1[7],20)
                                                        }
                                                        if(roleta1[7] == process.env.GALE_DUZIA){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta1[9] = false
                                                            roleta1[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta1[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }else{
                                                    if(coluna2.includes(NEWnum1) === true){
                                                        console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta1[8] = true
                                                        roleta1[9] = false
                                                        roleta1[5] = 0
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta1[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta1[7]++
                                                        if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                            console.log("GALE "+roleta1[7])
                                                            incrementarLOG("GALE "+roleta1[7])
                                                            fazerAposta(num,roleta1[7],1)
                                                        }
                                                        if(roleta1[7] == process.env.GALE_NOT_COLUMN){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta1[9] = false
                                                            roleta1[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta1[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }
                                            }
                                            if(num === 3){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    if(coluna3.includes(NEWnum1) === false){
                                                        console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta1[8] = true
                                                        roleta1[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta1[4] = 0
                                                        roleta1[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta1[7]++
                                                        if(roleta1[7] < process.env.GALE_DUZIA){
                                                            console.log("GALE "+roleta1[7])
                                                            incrementarLOG("GALE "+roleta1[7])
                                                            fazerAposta(num,roleta1[7],20)
                                                        }
                                                        if(roleta1[7] == process.env.GALE_DUZIA){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta1[9] = false
                                                            roleta1[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta1[7] = 1
                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }else{
                                                    if(coluna3.includes(NEWnum1) === true){
                                                        console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta1[9] = false
                                                        roleta1[8] = true
                                                        roleta1[6] = 0
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta1[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta1[7]++
                                                        if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                            console.log("GALE "+roleta1[7])
                                                            incrementarLOG("GALE "+roleta1[7])
                                                            fazerAposta(num,roleta1[7],1)
                                                        } 
                                                        if(roleta1[7] == process.env.GALE_NOT_COLUMN){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta1[9] = false
                                                            roleta1[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta1[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }
                                            }
                                    }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                            console.log(sequence("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                            incrementarLOG("APOSTA GANHA ["+roleta1[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                            roleta1[8] = true
                                            roleta1[9] = false
                                            apostando = false
                                            roletaAndamento = false
                                            roleta1[4] = 0
                                            roleta1[7] = 1
                                            win++
                                            irLobby()
                                    }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                        if(process.env.TYPE_JOGADA == 1){
                                            roleta1[7]++
                                            if(roleta1[7] < process.env.GALE_DUZIA){
                                                console.log("GALE "+roleta1[7])
                                                incrementarLOG("GALE "+roleta1[7])
                                                fazerAposta(num,roleta1[7],20)
                                            }
                                        }else{
                                            roleta1[7]++
                                            if(roleta1[7] < process.env.GALE_NOT_COLUMN){
                                                console.log("GALE "+roleta1[7])
                                                incrementarLOG("GALE "+roleta1[7])
                                                fazerAposta(num,roleta1[7],1)
                                            }
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

                    andamento = true
                    while (roleta15[9] === true) {
                        try {
                            NEWnum1 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(1) > span').textContent({timeout:500});
                            NEWnum2 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(2) > span').textContent({timeout:500});
                            NEWnum3 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(3) > span').textContent({timeout:500});
                            NEWnum4 = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('div.board-wrapper-layout > div.board-wrapper-right > div > div.mini-statistics > div:nth-child(4) > span').textContent({timeout:500});
                        } catch (error) {
                        } 
                
                            NEWnum1 = parseInt(NEWnum1)
                            NEWnum2 = parseInt(NEWnum2)
                            NEWnum3 = parseInt(NEWnum3)
                            NEWnum4 = parseInt(NEWnum4)
                            
                            if(process.env.TESTE === "false" && apostando === false && andamento === true && process.env.CONFIRMA_NOTCOLUMN === "false"){
                                    try {
                                        let apostasAberta  = await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator(' div.g-state.betting-time > div > div.toast > div.toast-in > div.toast-title > span.toast-title-in').textContent({timeout:500});        
                                        if(apostasAberta === "Faça suas apostas, por favor"){
                                            switch (num) {
                                                case 1:
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    fazerAposta(num,roleta15[7],20)
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                break;
                                                case 2:
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    fazerAposta(num,roleta15[7],20)
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                break;
                                                case 3:
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                    fazerAposta(num,roleta15[7],20)
                                                }
                                                apostando = true
                                                num1 = NEWnum1
                                                num2 = NEWnum2
                                                num3 = NEWnum3
                                                num4 = NEWnum4
                                                break;
                                            }
                                        }
                                    } catch (error) {
                                        //console.log("nao conseguiu apostar")
                                        andamento = false
                                    } 
                            }else{
                                if(NEWnum1 != ultimonumero && apostando === false){
                                    if(num === 1){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                fazerAposta(num,roleta15[7],20)
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna1.includes(NEWnum1) === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 2/3 "+nameR+" ")
                                                    fazerAposta(num,roleta15[7],20)
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
                                                irLobby()
                                                }
                                            }
                                        }
                                    }else if(num === 2){
                                        if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                            if(process.env.TYPE_JOGADA == 1){
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                fazerAposta(num,roleta15[7],20)
                                            }
                                            apostando = true
                                            num1 = NEWnum1
                                            num2 = NEWnum2
                                            num3 = NEWnum3
                                            num4 = NEWnum4
                                        }else{
                                            if(coluna2.includes(NEWnum1) === false  && apostando === false){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" "))
                                                    incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/3 "+nameR+" ")
                                                    fazerAposta(num,roleta15[7],20)
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
                                                irLobby()
                                                }
                                            }
                                        }
                                    }else if(num === 3){
                                    if(process.env.CONFIRMA_NOTCOLUMN === "false"){
                                        if(process.env.TYPE_JOGADA == 1){
                                            console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                            incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                            fazerAposta(num,roleta15[7],20)
                                        }
                                        apostando = true
                                        num1 = NEWnum1
                                        num2 = NEWnum2
                                        num3 = NEWnum3
                                        num4 = NEWnum4
                                    }else{
                                        if(coluna3.includes(NEWnum1) === false  && apostando === false){
                                            if(process.env.TYPE_JOGADA == 1){
                                                console.log(protecao("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" "))
                                                incrementarLOG("ENTRADA CONFIRMADA COLUNA 1/2 "+nameR+" ")
                                                fazerAposta(num,roleta15[7],20)
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
                                                irLobby()
                                            }
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
                                                    if(coluna1.includes(NEWnum1) === false){
                                                        console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta15[8] = true
                                                        roleta15[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta15[4] = 0
                                                        roleta15[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta15[7]++
                                                        if(roleta15[7] < process.env.GALE_DUZIA){
                                                            console.log("GALE "+roleta15[7])
                                                            incrementarLOG("GALE "+roleta15[7])
                                                            fazerAposta(num,roleta15[7],20)
                                                        }
                                                        if(roleta15[7] == process.env.GALE_DUZIA){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta15[9] = false
                                                            roleta15[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta15[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }else{
                                                    if(coluna1.includes(NEWnum1) === true){
                                                        console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta15[8] = true
                                                        roleta15[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta15[4] = 0
                                                        roleta15[7] = 1
                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta15[7]++
                                                        if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                            console.log("GALE "+roleta15[7])
                                                            fazerAposta(num,roleta15[7],1)
                                                        }
                                                        if(roleta15[7] == process.env.GALE_NOT_COLUMN){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta15[9] = false
                                                            roleta15[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta15[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }
                                            }
                                            if(num === 2){                                                
                                                if(process.env.TYPE_JOGADA == 1){
                                                    if(coluna2.includes(NEWnum1) === false){
                                                        console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta15[8] = true
                                                        roleta15[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta15[4] = 0
                                                        roleta15[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{roleta15[7]++
                
                                                        if(roleta15[7] < process.env.GALE_DUZIA){
                                                            console.log("GALE "+roleta15[7])
                                                            incrementarLOG("GALE "+roleta15[7])
                                                            fazerAposta(num,roleta15[7],20)
                                                        }
                                                        if(roleta15[7] == process.env.GALE_DUZIA){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta15[9] = false
                                                            roleta15[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta15[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }else{
                                                    if(coluna2.includes(NEWnum1) === true){
                                                        console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta15[8] = true
                                                        roleta15[9] = false
                                                        roleta15[5] = 0
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta15[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta15[7]++
                                                        if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                            console.log("GALE "+roleta15[7])
                                                            incrementarLOG("GALE "+roleta15[7])
                                                            fazerAposta(num,roleta15[7],1)
                                                        }
                                                        if(roleta15[7] == process.env.GALE_NOT_COLUMN){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta15[9] = false
                                                            roleta15[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta15[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }
                                            }
                                            if(num === 3){
                                                if(process.env.TYPE_JOGADA == 1){
                                                    if(coluna3.includes(NEWnum1) === false){
                                                        console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta15[8] = true
                                                        roleta15[9] = false
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta15[4] = 0
                                                        roleta15[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta15[7]++
                                                        if(roleta15[7] < process.env.GALE_DUZIA){
                                                            console.log("GALE "+roleta15[7])
                                                            incrementarLOG("GALE "+roleta15[7])
                                                            fazerAposta(num,roleta15[7],20)
                                                        }
                                                        if(roleta15[7] == process.env.GALE_DUZIA){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta15[9] = false
                                                            roleta15[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta15[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }else{
                                                    if(coluna3.includes(NEWnum1) === true){
                                                        console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                                        incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                                        roleta15[9] = false
                                                        roleta15[8] = true
                                                        roleta15[6] = 0
                                                        apostando = false
                                                        roletaAndamento = false
                                                        if(recuperacao == true){
                                                            if(process.env.MODE_RECUPERACAO == 1){
                                                                recuperacao = false
                                                                recuperacaoGALE = 0
                                                            }
                                                            recuperacaoGALE++
                                                        }
                                                        roleta15[7] = 1

                                                        await incrementarVitorias();
                                                        irLobby()
                                                    }else{
                                                        roleta15[7]++
                                                        if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                            console.log("GALE "+roleta15[7])
                                                            incrementarLOG("GALE "+roleta15[7])
                                                            fazerAposta(num,roleta15[7],1)
                                                        } 
                                                        if(roleta15[7] == process.env.GALE_NOT_COLUMN){
                                                            console.log(red("APOSTA PERDIDA"));
                                                            recuperacao = true
                                                            incrementarLOG("APOSTA PERDIDA")
                                                            roleta15[9] = false
                                                            roleta15[8] = true
                                                            apostando = false
                                                            roletaAndamento = false
                                                            roleta15[7] = 1

                                                            await incrementarDerrotas();
                                                            irLobby()
                                                        }
                                                    }
                                                }
                                            }
                                    }else if(process.env.APOSTARZERO === "true" && NEWnum1 == 0){
                                            console.log(sequence("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] "));
                                            incrementarLOG("APOSTA GANHA ["+roleta15[7]+"] [WINNER "+win+"][LOSS "+loss+"] ")
                                            roleta15[8] = true
                                            roleta15[9] = false
                                            apostando = false
                                            roletaAndamento = false
                                            roleta15[4] = 0
                                            roleta15[7] = 1
                                            win++
                                            irLobby()
                                    }else if(process.env.APOSTARZERO === "false" && NEWnum1 == 0){
                                        if(process.env.TYPE_JOGADA == 1){
                                            roleta15[7]++
                                            if(roleta15[7] < process.env.GALE_DUZIA){
                                                console.log("GALE "+roleta15[7])
                                                incrementarLOG("GALE "+roleta15[7])
                                                fazerAposta(num,roleta15[7],20)
                                            }
                                        }else{
                                            roleta15[7]++
                                            if(roleta15[7] < process.env.GALE_NOT_COLUMN){
                                                console.log("GALE "+roleta15[7])
                                                incrementarLOG("GALE "+roleta15[7])
                                                fazerAposta(num,roleta15[7],1)
                                            }
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
*/

    }

    irLobby()
    //await page.pause()
    setInterval(async () => {
        if(roletaAndamento === false && lobbyCrash === true){
           await analisandoLobby()
        } 
    },10000);  

})();

