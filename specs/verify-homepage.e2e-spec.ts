import { HomePage } from "../pages/homePage.po";
import { browser } from "protractor";
import { DataProvider } from "../data/dataProvider";

let homePage = new HomePage();
let using = require('jasmine-data-provider');

using(DataProvider.Common, async function (data) {
    describe("Homepage - verification", () => {

        it("Navigate to application url", async () => {
            await homePage.openUrl(homePage.applicationUrl);
            expect(await homePage.getPageTitle()).toBe(data.pageTitle);
        });

        it("Verify widget title is displayed", async () => {
            expect(await homePage.verifyElementPresentOnPage(homePage.widgetTitle)).toBe(true);
        });

        it("Verify current location link is displayed", async () => {
            expect(await homePage.verifyElementPresentOnPage(homePage.currentLocation)).toBe(true);
        });

        it("Verify widget temparature section is displayed", async () => {
            expect(await homePage.verifyElementPresentOnPage(homePage.widgetTemparature)).toBe(true);
        });

        it("Verify widget graphic section is displayed", async () => {
            expect(await homePage.verifyElementPresentOnPage(homePage.widgetGraphic)).toBe(true);
        });

    });
});