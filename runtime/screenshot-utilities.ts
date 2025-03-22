import TestParticipant from './test-participant';
import fs from 'fs';
import path from 'path';

const defaultFolderName = './failure-screenshots';

class ScreenshotUtilities {
  public static async takeFailureScreenshots(participants: TestParticipant[], testName: string) {
    const testFolderPath = this.createFolder(defaultFolderName, testName);

    for (let index = 0; index < participants.length; index++) {
      const participant = participants[index];

      const screenshotPath = path.join(testFolderPath, `${index}.png`);

      await participant.page.screenshot({ path: screenshotPath });
    }
  }

  private static createFolder(folderPath: string, folderName: string): string {
    const fullPath = path.join(folderPath, folderName);

    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }

    return fullPath;
  }
}

export default ScreenshotUtilities;
