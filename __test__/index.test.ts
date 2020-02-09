import screenshot from "../src/index";
import { unlink } from "fs";
import * as util from "util";

const filesToCleanUp = [];

async function cleanUp() {
    Promise.all(
        filesToCleanUp.map(location => {
            util.promisify(unlink)(location).catch(e => {
                return;
            });
        })
    );
}

describe("Testing screenshot function", () => {
    afterEach(async () => {
        await cleanUp();
    });

    test("screenshot google", async () => {
        const path = "google.png";
        filesToCleanUp.push(path);

        await screenshot("http://google.com", path);

        await expect(true).toBe(true);
    });
});
