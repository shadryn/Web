### Extracting Icons from WoW (Windows only right now)

* In the battle.net launcher, go into Game Settings, select "Additional Command Line Arguments" and enter `-console`
* Start the game and stay on the login screen
* Press the backtick key to open the console up
* Enter `ExportInterfaceFiles art`.  The game will appear to freeze while this happens
* Once the game starts responding again, go to <WoW Install Directory>/interface/BlizzardInterfaceArt/

* Remove the existing icons from the Web project public/assets/images/icons
* Copy the icons from <WoW Install Directory>/interface/BlizzardInterfaceArt/ICONS/ into the Web project icons dir
* Open two File Explorers.  Navigate to public/assets/images (ref IMAGES), and the other to utils (ref UTILS)
* In the IMAGES explorer, drag the "icons" directory onto the BLP2PNG.exe file in the UTILS Explorer

* Once the command prompt closes, all blp files have been converted to png
* Now from the CLI in the util directory, run: `node ./cleanup-icons.js`
* Once this runs, it will convert all file names to lowercase and remove all blp files
