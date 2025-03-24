import TestParticipant from '../test-participant';
import fs from 'fs';
import path from 'path';

const defaultFolderName = `./failure-screenshots`;

class ScreenshotUtilities {
  public static async takeFailureScreenshots(participants: TestParticipant[], testName: string) {
    try{

      const startTime = process.env.START_TIME ?? (() => {
         throw new Error(`A start time environment variable could not be found.`); 
        })();

        
      if (participants.length === 0){
        throw new Error("Aborting failure screenshots. No participants were found.");
      }
      
      const testRunFolderPath = this.ensureFolderExists(defaultFolderName, startTime);

      const testFolderPath = this.ensureFolderExists(testRunFolderPath, testName);

      for (let index = 0; index < participants.length; index++) {
        const participant = participants[index];

        const screenshotPath = path.join(testFolderPath, `${index}.png`);

        await participant.page.screenshot({ path: screenshotPath });

        console.log(`Successfully created failure screenshot for ${testName} at ${screenshotPath}`)
      }
    } catch(error){
      console.error(`Error while capturing failure screenshot for ${testName}`, error);
    }
  }

  private static ensureFolderExists(folderPath: string, folderName: string): string {
    const fullPath = path.join(folderPath, folderName);

    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }

    return fullPath;
  }
}

export default ScreenshotUtilities;
