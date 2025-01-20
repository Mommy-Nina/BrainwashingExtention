// List of ad image URLs
const adImages = [
    "ScamGame/00000954106.gif",
    "ScamGame/0c932d0fc93d489758d4f358f6ce56ac.gif",
    "ScamGame/1.gif",
    "ScamGame/1017557_video.gif",
    "ScamGame/1022371_banner.gif",
    "ScamGame/11f690990db423004112d1cfbfb5702e1eae6e8c.gif",
    "ScamGame/123123.gif",
    "ScamGame/123123123131.gif",
    "ScamGame/1312.gif",
    "ScamGame/1390.gif",
    "ScamGame/1391.gif",
    "ScamGame/1393.gif",
    "ScamGame/1394.gif",
    "ScamGame/1396.gif",
    "ScamGame/1397.gif",
    "ScamGame/1398.gif",
    "ScamGame/1464.gif",
    "ScamGame/1466.gif",
    "ScamGame/1646156412371.gif",
    "ScamGame/172.gif",
    "ScamGame/176.gif",
    "ScamGame/177.gif",
    "ScamGame/187.gif",
    "ScamGame/189.gif",
    "ScamGame/190.gif",
    "ScamGame/192.gif",
    "ScamGame/195.gif",
    "ScamGame/2.gif",
    "ScamGame/201118_640x200_01-sw.gif",
    "ScamGame/205.gif",
    "ScamGame/207.gif",
    "ScamGame/2115731016889161.gif",
    "ScamGame/218.gif",
    "ScamGame/222.gif",
    "ScamGame/22257801-56.gif",
    "ScamGame/223.gif",
    "ScamGame/224.gif",
    "ScamGame/225.gif",
    "ScamGame/226.gif",
    "ScamGame/25b5372fa3086c3cb1d8973797d250e2.gif",
    "ScamGame/30216-1551377450-0588683001551377450.gif",
    "ScamGame/3684.gif",
    "ScamGame/38254_300x250.jpg",
    "ScamGame/38865_300x250.jpg",
    "ScamGame/42390-1615372635-0987323001615372635.gif",
    "ScamGame/441a30284b5cf7d7d5da613982218cf0ee0d84b5.jpg",
    "ScamGame/48.jpg",
    "ScamGame/5ab66c9de4a214495e0520ec0947a69a988d9e13.gif",
    "ScamGame/5fe5883b54e2499d21b54abf111f4b9021b21c19.gif",
    "ScamGame/6.gif",
    "ScamGame/60104eae0eb5ef766922a7d9638f42ea.gif",
    //"ScamGame/63bde18948bf372b6607f0a57c5414e9.jpg",
    "ScamGame/6783951571557292410.jpg",
    "ScamGame/6a01feba9376ce4285fdcab159829ab9c0e708f3.gif",
    "ScamGame/6c58e6c14b7aa885c8ee3d11db7ec9c67ef51b88.jpg",
    "ScamGame/7.gif",
    "ScamGame/72.gif",
    "ScamGame/74.gif",
    "ScamGame/8.gif",
    "ScamGame/81cd446af36a60b93e2a0d97db6b9ee650063b6f.gif",
    //"ScamGame/84ab19bf397fcb63019de803f0c959b10ab898d6.mp4",
    //"ScamGame/9423bd18424b69353a46a8859f31c19a.jpg",
    "ScamGame/9f0321b501bdb7648b2ab534de7d27075eca99a6.gif",
    "ScamGame/a37b4125b6c9f60c0b6f158ada2565d1.gif",
    "ScamGame/ad-6.gif",
    "ScamGame/adult-games-ads.gif",
    "ScamGame/b3db6a75ff73f0bc91eb891bddaca0087a0a5d70.gif",
    "ScamGame/banner-03892.gif",
    "ScamGame/bef950361f674fcea8c669d3fe838bc34988d9b1.gif",
    //"ScamGame/c1af72531bbff6a7e05415849edc33eedaf41f44.gif",
    "ScamGame/c2_play_game.gif",
    "ScamGame/d61bf0e97b3b971b08748af56f901b2f952582ff.jpg",
    "ScamGame/da6d048c5b9282161d5bb4d8d39d600275c016e7.jpg",
    "ScamGame/e2a9576fc833a987171c764379079e11a4b4541c.gif",
    "ScamGame/e43978a871a195c9070b83b18a45ac20092acce5.gif",
    "ScamGame/e9a129f98011e92cbb58c6008538538ab1ac76b2.gif",
    "ScamGame/e9d6fb6050ef409abb31ac232ba1e4a9.gif",
    "ScamGame/ee427993666bfc9a2e4c2389724bae83d3ba3361.gif",
    "ScamGame/EN_300x250_oct_1mo_01.gif",
    "ScamGame/EN_300x250_oct_1mo_02.gif",
    "ScamGame/EN_300x250_oct_1mo_03.gif",
    "ScamGame/f158c8d1234bcb5e4e99a8ed40c0a9e0a3c7dba0.gif",
    "ScamGame/f21eeb899ddac1801d3e0e452165a416.gif",
    "ScamGame/f6f324688f6d28e73189d8551522c152.gif",
    "ScamGame/fortnite-1.gif",
    "ScamGame/free-to-play-hentai-game.gif",
    "ScamGame/free-to-play-sex-porn-games-hentai-rpg-computers-mobile-kamihime-project-r-role-playing-video-game.gif",
    "ScamGame/fucknite_porn.gif",
    "ScamGame/gamingadult600.gif",
    "ScamGame/gamingadultbox.gif",
    "ScamGame/img346_0.gif",
    "ScamGame/IMG_7393.gif",
    "ScamGame/notmyproudestfap.gif",
    "ScamGame/overwhore.gif",
    "ScamGame/porn-games.gif",
    "ScamGame/realityking-gif.gif",
    "ScamGame/tumblr_of3izsRYj31urxlnko1_400.gif",
    "ScamGame/tumblr_p4t6sxvzds1vzkueyo1_400.gif",
    "ScamGame/tumblr_p4t77tIZsB1wt9e66o1_500.gif",
    "ScamGame/tumblr_p4ws6nbOFp1wtn0t1o1_250.gif",
    "ScamGame/tumblr_p5l5cxjgxj1vzkueyo1_500.gif",
    "ScamGame/tumblr_p9vdx0Iget1vyzak9o1_500.gif",
    "ScamGame/whalauto.gif",
    "newGames/00000525789.gif",
    "newGames/5-ezgif.com-video-to-gif-converter.gif",
    "newGames/6c18c7947991bdd683a8869741f6c25a97b22b8c-ezgif.com-video-to-gif-converter.gif",
    "newGames/7-ezgif.com-optimize.gif",
    "newGames/9d4838e336743d86d10d148508deda189162646d-ezgif.com-optimize.gif",
    "newGames/52b61a99b6bef38b8cb52cbca95d59e9d8194cf6-ezgif.com-video-to-gif-converter.gif",
    "newGames/80e9bf7785579d600c3ca44ee96eb6da1fe3debf.gif",
    "newGames/e9b1be3b15aa7a0bff1616164917bd041-ezgif.com-optimize.gif",
    "newGames/eebf6f753a02d5563f2f29016dbdce01d27a6df9231231313-ezgif.com-optimize.gif",
    "newGames/R3_02.gif"
];

const links = [
    "https://www.lust-goddess.com/play",
    "https://freeadultgames.tv/lp1/",
    "https://jerkdolls.com/play/promo/1/",
    "https://sexsimulator.tv/play/",
    "https://vrfuckdolls.tv/play/",
    "https://familystimulation.com/lp1/",
    "https://jerktitans.com/play/",
    "https://playamazingporngames.com/tour732/",
    "https://Drive.google.com/uc?export=download&id=1qToS7KnN6bPtO0T9P_6jl0uEFG0PgDv3",
    "https://Drive.google.com/uc?export=download&id=16HOBb8zqP0xL1d_Q-hKBZJ831Aw4H4rx",
    "https://Drive.google.com/uc?export=download&id=1yjJFg_5BRlH7IpuLt51s1EVD0WZInmiK",
    "https://Drive.google.com/uc?export=download&id=180-hYH_wO5a8UAEm5E00QftZygzLjQ2p",
    "https://Drive.google.com/uc?export=download&id=1sYsrWp65VfRevDnRviy2KIsGpiLJYzUx",
    "https://Drive.google.com/uc?export=download&id=1EncVdkOr1qi2qsy5QwTcjYgmmxw43qBH",
    "https://Drive.google.com/uc?export=download&id=1Rrz_c0c_BTRbAFW26CSWyQGLZBzYIm6L",
    "https://cool-hotgirls.com/?s1=sed1",
    "https://cool-hotgirls.com/?s1=sed1",
    "https://cool-hotgirls.com/?s1=sed1",
    "https://cool-hotgirls.com/?s1=sed1",
    "https://vip.rabbitscams.sex/landing/rabbits",
    "https://tgp1.brazzersnetwork.com/tgp1",
    "https://crpdt.livejasmin.com",
    "https://xcafe.click/slut/",
    "https://beeg.day/",
    "https://beegcom.bet",
    "https://hypnotube.com/video/bambi-tiktok-1-41192.html",
    "https://hypnotube.com/video/bambi-tiktok-2-41193.html",
    "https://www.youtube.com/watch?v=SUM5hDHKlJ4",
    "https://www.youtube.com/watch?v=6Ulqsc-koSk",
    "https://www.pornhub.com/view_video.php?viewkey=6608f5833988e&t=159",
    "https://www.pornhub.com/view_video.php?viewkey=65f77a0f5c8cd",
    "https://www.pornhub.com/view_video.php?viewkey=6609ccbd225d8",
    "https://www.pornhub.com/view_video.php?viewkey=6606e1faaa46a",
    "https://www.pornhub.com/view_video.php?viewkey=645811282e9ee",
    "https://www.pornhub.com/view_video.php?viewkey=ph6341485f1a3df",
    "https://www.pornhub.com/view_video.php?viewkey=ph62c3335b4fdfe",
    "https://www.pornhub.com/view_video.php?viewkey=ph623790e1a3ea4",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://throne.com/indralovesu",
    "https://www.pornhub.com/view_video.php?viewkey=ph62d4f9b8f1067",
    "https://www.pornhub.com/view_video.php?viewkey=ph5d5d608233646",
    "https://Drive.google.com/uc?export=download&id=1y-PnoyAKTWmoRQvxSeU8-DUiFdU4m733",
    "https://Drive.google.com/uc?export=download&id=1YlfjNQxMUE_PEIT1gKpL2RtcXTHouF86",
    "https://Drive.google.com/uc?export=download&id=1KxQGq4hnPled7VadvqM9Vn2m_6o54NXc"
    ];

const replacementImages = [
    "EarlyGifs/SlowPie.gif",
    "EarlyGifs/SmallBig.gif",
    "EarlyGifs/SmallBikini.gif",
    "EarlyGifs/SquatCum.gif",
    "EarlyGifs/StopPop.gif",
    "EarlyGifs/ThighCum.gif",
    "EarlyGifs/ToesSoles.gif",
    "EarlyGifs/TongueWiggle.gif",
    "EarlyGifs/YachtWalk.gif",
    "EarlyGifs/AbusedPie.gif",
    "EarlyGifs/AgainGood.gif",
    "EarlyGifs/AhegaoMind.gif",
    "EarlyGifs/ApronTurn.gif",
    "EarlyGifs/BeingHypno.gif",
    "EarlyGifs/BestSelf.gif",
    "EarlyGifs/CornerCum.gif",
    "EarlyGifs/CornerRub.gif",
    "EarlyGifs/DarkRoast.gif",
    "EarlyGifs/DaySmile.gif",
    "EarlyGifs/Desperate.gif",
    "EarlyGifs/Drool.gif",
    "EarlyGifs/EgirlAhegao.gif",
    "EarlyGifs/EnjoyDown.gif",
    "EarlyGifs/FenceBounce.gif",
    "EarlyGifs/GazeAhegao.gif",
    "EarlyGifs/GetTriggered.gif",
    "EarlyGifs/HardBig.gif",
    "EarlyGifs/JiggleDance.gif",
    "EarlyGifs/JOITits.gif",
    "EarlyGifs/Layslide.gif",
    "EarlyGifs/LessBliss.gif",
    "EarlyGifs/LightAhegao.gif",
    "EarlyGifs/LoveFacial.gif",
    "EarlyGifs/OffSwitch.gif",
    "EarlyGifs/OiledAbove.gif",
    "EarlyGifs/PantieTwirl.gif",
    "EarlyGifs/PinkieFem.gif",
    "EarlyGifs/PrintReveal.gif",
    "EarlyGifs/ProJerk.gif",
    "EarlyGifs/PublicHands.gif",
    "EarlyGifs/PullSilhouette.gif",
    "EarlyGifs/PumpNEdge.gif",
    "ScamGame/fucknite_porn.gif",
    "ScamGame/gamingadult600.gif",
    "ScamGame/gamingadultbox.gif",
    "ScamGame/img346_0.gif",
    "ScamGame/IMG_7393.gif",
    "ScamGame/notmyproudestfap.gif",
    "ScamGame/overwhore.gif",
    "ScamGame/porn-games.gif",
    "ScamGame/realityking-gif.gif",
    "ScamGame/tumblr_of3izsRYj31urxlnko1_400.gif",
    "ScamGame/tumblr_p4t6sxvzds1vzkueyo1_400.gif",
    "ScamGame/tumblr_p4t77tIZsB1wt9e66o1_500.gif",
    "ScamGame/tumblr_p4ws6nbOFp1wtn0t1o1_250.gif",
    "ScamGame/tumblr_p5l5cxjgxj1vzkueyo1_500.gif",
    "ScamGame/tumblr_p9vdx0Iget1vyzak9o1_500.gif",
    "ScamGame/whalauto.gif",
    "SubBatch/-94EWjnt.jpeg",
    "SubBatch/-B_ar6WR.jpeg",
    "SubBatch/-lwBQMNU.jpeg",
    "SubBatch/-q4fDtkB.jpeg",
    "SubBatch/-zILgiam.jpeg",
    "SubBatch/00nMv1HA.jpeg",
    "SubBatch/1IBgyXx2.jpeg",
    "SubBatch/37J7KU4X.jpeg",
    "SubBatch/4rNNTyHp.jpeg",
    "SubBatch/6wqUbYew.jpeg",
    "SubBatch/7P83-wws.jpeg",
    "SubBatch/86omM2AF.jpeg",
    "SubBatch/8To3X96x.jpeg",
    "SubBatch/c3IdDSLZ.jpeg",
    "SubBatch/chZnsV27.jpeg",
    "SubBatch/co7ui9qi.jpeg",
    "SubBatch/DKqynyK0.jpeg",
    "SubBatch/dnbOFvt8.jpeg",
    "SubBatch/dqZoFjK7.jpeg",
    "SubBatch/EqlIt-TP.jpeg",
    "SubBatch/f9SnJ3-D.jpeg",
    "SubBatch/FDcqfXrn.jpeg",
    "SubBatch/IgkXMnAB.jpeg",
    "SubBatch/IO2TVNZJ.jpeg",
    "SubBatch/JuVMpnU5.jpeg",
    "SubBatch/kMqEmN_6.jpeg",
    "SubBatch/k_1pgqmK.jpeg",
    "SubBatch/LB_ctkHR.jpeg",
    "SubBatch/lG6qHSiQ.jpeg",
    "SubBatch/LNd4a7Dj.jpeg",
    "SubBatch/mTmcGXR9.jpeg",
    "SubBatch/ObR8_MwA.jpeg",
    "SubBatch/o_4tJxBf.jpeg",
    "SubBatch/PuyjGvdv.jpeg",
    "SubBatch/q8J_wH2W.jpeg",
    "SubBatch/qLFmsbuZ.jpeg",
    "SubBatch/QXZx1Ad9.jpeg",
    "SubBatch/RZewHgF1.jpeg",
    "SubBatch/SkwptQbb.jpeg",
    "SubBatch/StidSBHF.jpeg",
    "SubBatch/TIxBEtsY.jpeg",
    "SubBatch/TJy_L3tw.jpeg",
    "SubBatch/v40iDw5W.jpeg",
    "SubBatch/v8TA2mWV.jpeg",
    "SubBatch/VhOmFQld.jpeg",
    "SubBatch/vxPk_MYS.jpeg",
    "SubBatch/WgAqi3CM.jpeg",
    "SubBatch/xIVv7CMj.jpeg",
    "SubBatch/YA5RMvNK.jpeg",
    "SubBatch/zPnlqqKv.jpeg",
    "CaptionsJun6/003.jpg",
    "CaptionsJun6/007snf.jpg",
    "CaptionsJun6/093_1000.jpg",
    "CaptionsJun6/1150802363.gif",
    "CaptionsJun6/12smIT.jpg",
    "CaptionsJun6/1621304883843.jpg",
    "CaptionsJun6/163440812108141474638.jpg",
    "CaptionsJun6/1634505805195.png",
    "CaptionsJun6/1B56C7B4-B477-4D9E-BB3D-5D52FF1550A2.jpg",
    "CaptionsJun6/1EFDBD4.jpg",
    "CaptionsJun6/1FC93BC6-6613-4542-B995-CF08E852A674.jpg",
    "CaptionsJun6/20200608_150927.jpg",
    "CaptionsJun6/2021-06-1912.25.07.jpeg",
    "CaptionsJun6/20210418_161132.jpg",
    "CaptionsJun6/20210517_162815.jpg",
    "CaptionsJun6/20210918_001438.jpg",
    "CaptionsJun6/20211015_011048.jpg",
    "CaptionsJun6/20211015_011105.jpg",
    "CaptionsJun6/20211015_013417.jpg",
    "CaptionsJun6/20211015_013446.jpg",
    "CaptionsJun6/20211015_014050.jpg",
    "CaptionsJun6/20211015_014111.jpg",
    "CaptionsJun6/20211015_014347.jpg",
    "CaptionsJun6/20211015_021237.jpg",
    "CaptionsJun6/20211015_021332.jpg",
    "CaptionsJun6/20211015_022047.jpg",
    "CaptionsJun6/20211015_022105.jpg",
    "CaptionsJun6/20211015_022617.jpg",
    "CaptionsJun6/20211015_022702.jpg",
    "CaptionsJun6/20211015_023456.jpg",
    "CaptionsJun6/20211015_023954.jpg",
    "CaptionsJun6/20211015_024435.jpg",
    "CaptionsJun6/20211015_024631.jpg",
    "CaptionsJun6/20211015_024732.jpg",
    "CaptionsJun6/20211015_024823.jpg",
    "CaptionsJun6/20211015_024908.jpg",
    "CaptionsJun6/20211015_025236.jpg",
    "CaptionsJun6/20211015_025350.jpg",
    "CaptionsJun6/20211015_025859.jpg",
    "CaptionsJun6/20211015_031149.jpg",
    "CaptionsJun6/20211015_031241.jpg",
    "CaptionsJun6/20211015_031718.jpg"
    ];

// Function to decide whether to show an ad
function shouldShowAd(probability) {
    return Math.random() < probability; // probability is a number between 0 and 1
}

function replaceImages() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        if (! img.src.includes("indra")) {
          const randomImage = "https://scammedby.indralovesu.xyz/img/" + replacementImages[Math.floor(Math.random() * replacementImages.length)];
          img.src = randomImage;
          img.srcset = "";
        }
      });
}

window.addEventListener("load", replaceImages);

// Show an ad with a 30% chance
if (shouldShowAd(0.4)) {
    const randomImage = "https://scammedby.indralovesu.xyz/img/" + adImages[Math.floor(Math.random() * adImages.length)];
    let adBanner = document.createElement('div');
    adBanner.style.cssText = `position: fixed;bottom: 20px;right: 20px;background-color: white;padding: 10px;z-index: 10000;border: 1px solid black;box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);border-radius: 8px;text-align: center;`;
    let adImage = document.createElement('img');
    adImage.src = randomImage;
    adImage.alt = "Ad";
    let adLink = document.createElement('a');
    adLink.href = links[Math.floor(Math.random() * links.length)];
    adLink.target = "_blank";
    adImage.style.cssText = "max-width: 100%; height: auto;";
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.style.cssText = "position: absolute; top: 5px; right: 5px; background: grey; color: white; border: none; cursor: pointer;";
    closeButton.onclick = () => adBanner.remove();
    adBanner.appendChild(closeButton);
    adLink.appendChild(adImage);
    adBanner.appendChild(adLink);
    document.body.prepend(adBanner);
}

if (shouldShowAd(0.4)) {
    const randomImage = "https://scammedby.indralovesu.xyz/img/" + adImages[Math.floor(Math.random() * adImages.length)];
    let adBanner = document.createElement('div');
    adBanner.style.cssText = `position: fixed;top: 20px;right: 20px;background-color: white;padding: 10px;z-index: 10000;border: 1px solid black;box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);border-radius: 8px;text-align: center;`;
    let adImage = document.createElement('img');
    adImage.src = randomImage;
    adImage.alt = "Ad";
    let adLink = document.createElement('a');
    adLink.href = links[Math.floor(Math.random() * links.length)];
    adLink.target = "_blank";
    adImage.style.cssText = "max-width: 100%; height: auto;";
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.style.cssText = "position: absolute; top: 5px; right: 5px; background: grey; color: white; border: none; cursor: pointer;";
    closeButton.onclick = () => adBanner.remove();
    adBanner.appendChild(closeButton);
    adLink.appendChild(adImage);
    adBanner.appendChild(adLink);
    document.body.prepend(adBanner);
}

if (shouldShowAd(0.4)) {
    const randomImage = "https://scammedby.indralovesu.xyz/img/" + adImages[Math.floor(Math.random() * adImages.length)];
    let adBanner = document.createElement('div');
    adBanner.style.cssText = `position: fixed;top: 20px;left: 20px;background-color: white;padding: 10px;z-index: 10000;border: 1px solid black;box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);border-radius: 8px;text-align: center;`;
    let adImage = document.createElement('img');
    adImage.src = randomImage;
    adImage.alt = "Ad";
    let adLink = document.createElement('a');
    adLink.href = links[Math.floor(Math.random() * links.length)];
    adLink.target = "_blank";
    adImage.style.cssText = "max-width: 100%; height: auto;";
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.style.cssText = "position: absolute; top: 5px; right: 5px; background: grey; color: white; border: none; cursor: pointer;";
    closeButton.onclick = () => adBanner.remove();
    adBanner.appendChild(closeButton);
    adLink.appendChild(adImage);
    adBanner.appendChild(adLink);
    document.body.prepend(adBanner);
}

if (shouldShowAd(0.4)) {
    const randomImage = "https://scammedby.indralovesu.xyz/img/" + adImages[Math.floor(Math.random() * adImages.length)];
    let adBanner = document.createElement('div');
    adBanner.style.cssText = `position: fixed;bottom: 20px;left: 20px;background-color: white;padding: 10px;z-index: 10000;border: 1px solid black;box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);border-radius: 8px;text-align: center;`;
    let adImage = document.createElement('img');
    adImage.src = randomImage;
    adImage.alt = "Ad";
    let adLink = document.createElement('a');
    adLink.href = links[Math.floor(Math.random() * links.length)];
    adLink.target = "_blank";
    adImage.style.cssText = "max-width: 100%; height: auto;";
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.style.cssText = "position: absolute; top: 5px; right: 5px; background: grey; color: white; border: none; cursor: pointer;";
    closeButton.onclick = () => adBanner.remove();
    adBanner.appendChild(closeButton);
    adLink.appendChild(adImage);
    adBanner.appendChild(adLink);
    document.body.prepend(adBanner);
}