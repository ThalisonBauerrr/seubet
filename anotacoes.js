await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: '0.5' }).click();
await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^1\.5$/ }).click();
await page.frameLocator('#casino-game-modal iframe').frameLocator('iframe[title="gameFrame"]').locator('svg').filter({ hasText: /^5$/ }).click();



//IDS EVOLUTION
//ROLETA1 - NUMERO 1
#rr6icrlgt3swbhmd > article > div.AspectRatioGridBox--6a07a.TableTile--44b35.clickable--43bab.Format4to3--c329d > div.TableTileFooter--6946e.animate--5dfe8.shadow--f2275 > div.History--09963.tile--9ba18.shortended--405dc > div > div > div:nth-child(1) > svg > text

//ROLETA2 - NUMERO 1
#LightningTable01 > article > div.AspectRatioGridBox--6a07a.TableTile--44b35.clickable--43bab.Format4to3--c329d > div.TableTileFooter--6946e.animate--5dfe8.shadow--f2275 > div.History--09963.tile--9ba18.shortended--405dc > div > div > div:nth-child(1) > svg > text