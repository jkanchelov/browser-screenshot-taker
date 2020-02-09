import * as playwright from "playwright";
import { BrowserContextOptions } from "playwright-core/lib/browserContext";
import BrowserType from "./enums/browserType";

export default async (
    url: string,
    path?: string,
    browserType: BrowserType = BrowserType.Chromium,
    browserContextOptions?: BrowserContextOptions
): Promise<void> => {
    const browser = await playwright[browserType].launch({});

    const context = await browser.newContext(browserContextOptions);

    const page = await context.newPage(url);

    await page.screenshot({ path });

    await browser.close();
};
