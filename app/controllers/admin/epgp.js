import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { API_PATH, API_EPGP_UPLOAD_PATH } from '../../const';

export default Ember.Controller.extend({
  isProcessing: false,
  submitError: false,

  apiKey: 'Q[uK66_t(.rb#hlMjfk9&X57+0sd%Z',
  epgpData: '{"guild":"No Breaks","region":"US","min_ep":0,"base_gp":1,"roster":[["Veksaryn-Thrall",1,1],["R\u00E0lph-Thrall",1,1],["Hallister-Thrall",1,1],["Manypalms-Thrall",1,1],["Stiffknight-Thrall",5,1],["Alcamak-Thrall",1,1],["Fuzzybandit-Thrall",237,1],["Thelard-Thrall",55,1],["Bludwrath-Thrall",189,1],["Brimic-Thrall",10,1],["Bendystraws-Thrall",1,1],["Pouncinglion-Thrall",35,1],["Zomsamedi-Thrall",61,446],["Dooshcanoo-Thrall",1,1],["Mitchprpl-Thrall",889,1],["Angelgrave-Thrall",1358,1],["Chocoslayer-Thrall",1,1],["Am\u00E0geing-Thrall",1,1],["Ziatox-Thrall",311,1],["Veksjin-Thrall",1,1],["Auralfxashun-Thrall",36,1],["Shadowbounce-Thrall",1,1],["Stormpeaks-Thrall",1938,1],["Innocentius-Thrall",1,1],["Gronghorn-Thrall",1,1],["Saltydruid-Thrall",1,1],["Cabbagefury-Thrall",1,1],["Mokshaa-Thrall",1,1],["Snoringdogs-Thrall",100,1],["Nemi-Thrall",1,1],["Chihuahuaz-Thrall",1,1],["Truhealz-Thrall",1831,1],["Banry\u00FB-Thrall",1,1],["Missmisty-Thrall",35,1],["Stabbinthing-Thrall",1,1],["Akenzia-Thrall",80,1],["Alarassa-Thrall",101,1],["Sholazar-Thrall",42,1],["Conbull-Thrall",1,1],["Dampbanana-Thrall",1,1],["Truboom-Thrall",1,1],["Veleras-Thrall",1,1],["Deathiminent-Thrall",1,1],["Boriskarlock-Thrall",1,1],["Vxar-Thrall",1956,751],["Nokitty-Thrall",112,908],["Oldmanzyx-Thrall",1,1],["Krazytrain-Thrall",1,1],["Monkkybutt-Thrall",1,1],["Shadrinn-Thrall",1,1],["Cruum-Thrall",35,1],["Hotgluegun-Thrall",1,1],["Verlonia-Thrall",1,1],["Shammw\u00F4w-Thrall",35,1],["F\u00F6rs\u00E1ken-Thrall",1,1],["Greelo-Thrall",1,1],["Gryk-Thrall",1,1],["Djmarkiemark-Thrall",1,1],["Saltytank-Thrall",1,1],["Nitocris-Thrall",1,1],["Torok-Thrall",1,1],["Saltymonk-Thrall",1,1],["Restructur-Thrall",1,1],["Cheazypoof-Thrall",1,1],["Seldris-Thrall",1,1],["Shadrynn-Thrall",1,1],["Noles-Thrall",5,1],["Leth\u00E8-Thrall",60,1],["Tydecaller-Thrall",1,1],["Protip-Thrall",225,1],["Konshots-Thrall",1,1],["Angelflesh-Thrall",1,1],["Krasper-Thrall",35,1],["Discgrace-Thrall",35,1],["Skarloins-Thrall",5,1],["Kontar-Thrall",1,1],["Monkeymurloc-Thrall",1,1],["Raztopi-Thrall",1635,1],["Joanrivers-Thrall",1,1],["Contar-Thrall",1,1],["Skarrlen-Thrall",141,1],["Konreborn-Thrall",1,1],["Deathmarich-Thrall",47,1],["Konnovar-Thrall",1503,1],["Kefk\u00E2-Thrall",62,1],["Skarelin-Thrall",100,1],["Soggystache-Thrall",1,1],["Squattypotty-Thrall",218,1],["Dumptrucks-Thrall",1247,1],["D\u00EAathunknown-Thrall",1337,1],["Trulik-Thrall",1,1],["Concursing-Thrall",66,1],["Saltydeaths-Thrall",1,1],["Zomhunter-Thrall",1,1],["Carbondii-Thrall",130,1],["Happymealtoy-Thrall",191,1],["Jhereg-Thrall",1,1],["Krothac-Thrall",1800,1],["Skaarlin-Thrall",26,1],["Emerishoot-Thrall",1,1],["Getrektnoob-Thrall",1,1],["Captaen-Thrall",355,1],["Murlocalypse-Thrall",1,1],["Oldmurkeye-Thrall",1,1],["Saltylocks-Thrall",1,1],["Beltface-Thrall",1,1],["Moistdigits-Thrall",1,1],["Juanweed-Thrall",1,1],["Lovewins-Thrall",1,1],["Sableclaw-Thrall",1,1],["Frankenbeef-Thrall",1,1],["Konnivar-Thrall",684,1],["Thewildscump-Thrall",1,1],["Sh\u00E5dryn-Thrall",70,1],["Howlingfjord-Thrall",1,1],["Truellah-Thrall",1,1],["Marksmurloc-Thrall",427,1],["Blackst\u00E0bath-Thrall",51,1],["Bleumitch-Thrall",46,1],["Skarlen-Thrall",46,1],["Vl\u00E5d-Thrall",87,1],["Skarlin-Thrall",1410,1],["Satiah-Thrall",1,1],["Connivar-Thrall",1,1],["Devera-Thrall",1,1],["Shamberger-Thrall",30,1],["Meritites-Thrall",1,1],["B\u00E4rwench-Thrall",1,1],["Daginjaninja-Thrall",1,1],["Coffeecups-Thrall",1,1],["Angrynibbles-Thrall",25,1],["Evilnuke-Thrall",822,1],["Skarfu-Thrall",1,1],["Chopshamm-Thrall",65,1],["Khara-Thrall",1,1],["Madjay-Thrall",95,1],["Demons-Thrall",1,1],["Barzec-Thrall",1,1],["Shdowhuntr-Thrall",1332,1],["Rathostus-Thrall",1,1],["Oldman-Thrall",66,1],["Srkxyz-Thrall",1,1],["Discow-Thrall",1,1],["Discomurloc-Thrall",1,1],["Dankfury-Thrall",55,1],["Sudri-Thrall",1,1],["Pcritty-Thrall",52,1],["Sardonick-Thrall",1,1],["Aldeshar-Thrall",2077,1],["Codyth-Thrall",1110,1],["Caf\u00E9aulait-Thrall",141,1],["Burnmarks-Thrall",1,1],["Comradewolf-Thrall",5,1],["Squishiloots-Thrall",1,1],["Mythoa-Thrall",70,1],["Skarlock-Thrall",1,1],["Nerdtagar-Thrall",1,1],["Wildwinds-Thrall",65,1],["Nefertarie-Thrall",1,1],["Ventoplaga-Thrall",1,1],["Huufnahoth-Thrall",1,1],["Truvella-Thrall",1,1],["Darkprayers-Thrall",1,1],["Poxviridae-Thrall",1,1],["Silantdeath-Thrall",150,1],["Shoxxie-Thrall",1,1],["Pocketellie-Thrall",1,1],["Eronist-Thrall",1,1],["Arsinoe-Thrall",1,1],["Skarrlin-Thrall",48,1],["Arrownyst-Thrall",1,1],["Themurloc-Thrall",1007,1],["Drydens-Thrall",737,1],["Rockfarce-Thrall",1,1],["Trushooter-Thrall",36,1],["Buckeye-Thrall",1,1],["Grizzels-Thrall",1,1],["Courag\u00E9wolf-Thrall",1418,1],["Zomkitty-Thrall",1,1],["Voodooclaws-Thrall",1,1],["Viskah-Thrall",35,1],["Dewyorcifice-Thrall",1,1],["Nephtthys-Thrall",1,1],["Tricster-Thrall",1,1],["Skarlorn-Thrall",61,1],["Mystic\u00E3l-Thrall",66,1],["Ssxyz-Thrall",1,1],["Canadiene-Thrall",5,1],["Khaylyn-Thrall",415,1],["Tsmdlift-Thrall",1,1],["Omba-Thrall",70,1],["Vanthioz-Thrall",185,1],["Moistnapkin-Thrall",1,1],["Shevonar-Thrall",1,1],["Trinumerate-Thrall",1,1],["Acadim-Thrall",1,1],["Dawningl\u00EEght-Thrall",1,1],["Shammichezz-Thrall",191,1],["Equality-Thrall",1,1],["Linedpaper-Thrall",1,1],["Shamnom-Thrall",1,1],["Heiler-Thrall",1,1],["Servona-Thrall",1,1],["Dbm-Thrall",1,1],["Skarloin-Thrall",1,1],["Konmoney-Thrall",1,1],["Nebet-Thrall",2161,1],["Nojawmcgraw-Thrall",31,1],["Shadryn-Thrall",1488,1]],"decay_p":0,"loot":[[1468019940,"Zomsamedi-Thrall","item:124356:0:0:0:0:0:0:0:100:62:4:5:1:566:529",445],[1468022400,"Vxar-Thrall","item:124321:0:0:0:0:0:0:0:100:62:4:5:1:566:529",750]],"timestamp":1468039500,"extras_p":100,"realm":"Thrall"}',

  actions: {
    submit: function() {
      this.setProperties({
        isProcessing: true,
        submitError: false
      });

      fetch(API_PATH + API_EPGP_PATH, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apiKey: this.get('apiKey'),
          epgpData: this.get('epgpData')
        })
      })
      .then((response) => {
        this.set('isProcessing', false);

        if(response.status === 401) {
          this.set('submitError', 'The API Key you entered is invalid');
        }
      });
    }
  }
});
