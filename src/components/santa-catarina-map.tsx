const statePath = "M-524426,-264381l-806,385l-338,-82l-880,269l-556,229l-622,44l-1455,-58l-294,-28l-903,-80l-1322,196l-91,25l-1730,990l-881,-328l-5,-2l-2081,313l-498,-1778l4,-147l-325,-945l-98,-629l163,-1501l371,-931l19,-489l37,-500l-610,-614l-1044,-1642l174,-73l1020,-68l1180,-69l519,130l596,-174l1328,825l592,-211l-263,-775l1348,176l1110,845l589,147l253,-469l213,-778l1199,475l503,-331l155,-26l940,-784l1469,438l83,-195l1038,423l133,-646l214,-101l980,-266l385,622l365,-737l1177,-128l581,-29l656,-288l1252,-1000l211,-471l491,74l868,350l686,-88l542,-884l308,179l903,-484l1485,-1120l355,-160l2199,-1334l-33,-179l552,-764l231,150l1031,-931l1262,-2072l535,-214l817,-1237l1891,-397l3561,-459l979,390l1545,-288l894,-499l238,-1100l-10,-11l-785,202l-576,-1033l-945,-126l-162,-1678l-48,-554l-19,-1193l-587,-1146l-1215,-109l-68,-765l1036,-849l70,55l-803,920l1567,581l560,-158l1098,-703l789,-400l678,872l1291,1427l1396,1396l863,729l1022,810l3299,1865l1115,1106l402,1637l720,2284l134,1681l339,405l104,604l590,625l1470,3317l-466,692l-1091,-277l-685,922l-79,982l243,64l831,130l-127,880l-776,-344l-35,839l-392,1009l-139,474l210,865l-401,550l-206,528l171,1375l141,336l564,951l1012,2336l-763,509l-259,1909l-868,-69l-2683,-63l-179,33l-2662,-440l-1263,-1067l-684,-326l-568,-152l-12,-90l-1159,-325l-874,372l-1741,1537l-695,169l-593,75l-1964,-586l-787,272l-972,-693l-2045,1101l-583,-608l-690,-1190l-58,-62l-1964,-1013l-918,543l-874,76l-1240,-708l-493,-533l-182,-354l-300,-308l783,-1760l-168,-342l-1522,-353l-204,-539l-1006,1354l-3119,-2l-2051,350l-1297,807l-2838,281Z";

const joinvillePath = "M-487837,-261531l-446,300l-1469,-21l-668,112l-149,380l-164,11l-856,-395l-302,-310l208,-427l-343,-321l333,-8l-66,-370l312,-582l338,215l569,47l486,-186l-153,-421l171,-384l731,-321l242,477l307,-91l365,-581l317,649l424,238l413,91l-335,490l173,75l-241,715l42,255l-239,363Z";

export function SantaCatarinaMap() {
  return (
    <figure className="sc-map">
      <svg
        viewBox="-53.8371 25.9768 5.4665 3.3783"
        role="img"
        aria-labelledby="sc-map-title sc-map-description"
      >
        <title id="sc-map-title">Santa Catarina com Joinville destacada</title>
        <desc id="sc-map-description">Contorno oficial simplificado do estado de Santa Catarina. O município de Joinville aparece destacado no nordeste do estado.</desc>
        <defs>
          <clipPath id="sc-state-outline" clipPathUnits="userSpaceOnUse">
            <path d={statePath} transform="scale(.0001,-.0001)" />
          </clipPath>
        </defs>
        <path className="sc-map__state" d={statePath} transform="scale(.0001,-.0001)" />
        <circle className="sc-map__north" cx="-49.15" cy="26.48" r=".82" clipPath="url(#sc-state-outline)" />
        <path className="sc-map__city" d={joinvillePath} transform="scale(.0001,-.0001)" />
        <circle className="sc-map__marker-halo" cx="-48.96315" cy="26.2578" r=".13" />
        <circle className="sc-map__marker" cx="-48.96315" cy="26.2578" r=".055" />
        <path className="sc-map__callout" d="M-49.08 26.28-50.05 26.42" />
        <text className="sc-map__label" x="-50.16" y="26.48">Joinville</text>
      </svg>
      <figcaption>
        <span><i /> Município de Joinville</span>
        <small>Recorte demonstrativo com base na Malha Geográfica do IBGE.</small>
      </figcaption>
    </figure>
  );
}
