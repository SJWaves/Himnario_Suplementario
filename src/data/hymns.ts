import { getAssetUrl } from '@/app/lib/assets';

export interface Hymn {
  id: number;
  title: string;
  reference?: string;
  verses: string[];
  audioUrl?: string;
}

/** Audio files live in public/audio/ (e.g. /audio/1.mp3). Himno 3 has no track. */
export const hymnsData: Hymn[] = [
  {
    id: 1,
    title: "Sé Tú Mi Visión",
    reference: "Salmo 73:26",
    verses: [
      "\n 1. Oh Dios, de mi alma, sé Tú mi visión,\nNada te aparte de mi corazón.\nNoche y día siempre yo pienso en Ti,\nY Tu presencia es luz para mí.\n",
      "\n 2. Sabiduría, sé Tú en mi ser,\nQuiero a Tu lado mi senda correr;\nComo a Tu hijo amado me tienes Señor,\nSiempre morando en un mismo amor.\n",
      "\n 3. Riquezas vanas no anhelo, Señor,\nNi el vano halago de la adulación;\nTú eres mi herencia y Tú mi porción,\nRey de los cielos, tesoro mejor.\n",
      "\n 4. Oh Rey de gloria, del triunfo al final,\nGuíame al cielo a morar en Tu hogar;\nLuz de mi alma mi dueño y Señor,\nEn vida o muerte, sé Tú mi visión."
    ],
    audioUrl: getAssetUrl('audio/1.mp3'),
  },
  {
    id: 2,
    title: "Jesús Te Necesito",
    reference: "Juan 6:68",
    verses: [
      "\n 1. Jesús, te necesito: pecado mora en mí,\nMi corazón corrupto culpable es ante Ti;\nEs Tu obra redentora mi justificación,\nTu sangre purifica de toda transgresión.\n",
      "\n 2. Jesús, Te necesito, pues indigente soy,\nUn peregrino pobre: por tierra ajena voy.\nLa senda es ardua y larga; mas Tú me sostendrás.\nDirigirás mis pasos; me fortalecerás.\n",
      "\n 3. Jesús, Te necesito, pues ciego soy sin Ti,\nMi mente es necia y débil; errante voy aquí\nLa senda es peligrosa: me es menester Tu luz\nQue guía a salvo al cielo, do Te veré, Jesús.\n",
      "\n 4. Espero verte pronto, sentado en potestad,\nEnvuelto en arcoiris, en gloria y majestad,\nCon los que redimiste por sangre, oh Señor\nMi gozo está en loarte, Jesús mi Salvador.\n"
    ],
    audioUrl: getAssetUrl('audio/2.mp3'),
  },
  {
    id: 3,
    title: "Tranquila Mi Alma",
    reference: "Santiago 5:7",
    verses: [
      "\n 1. ¡Tranquila, mi alma! Dios es tu Refugio\nEspera en Él, paciente en la afflicción\nJesús te es fiel en toda tu congoja\nJesús, tu Dios, tu Amigo y Salvación,\n¡Tranquila! Dios, en medio de lo oscuro,\nHará brillar Su gloria y compasión.\n",
      "\n 2. ¡Silencio, mi alma! El Salvador gobierna:\nEl mar rugiente Le obedecerá\nTu Padre reina: Él obra en tu quebranto:\nMediante pruebas te acrisolará.\nAliviará tu duelo y sufrimiento:\nLo turbador preciado fin tendrá.\n",
      "\n 3. ¡Tranquila, mi alma! En lágrimas, o en luto,\nAl Dios excelso puedes acudir\nÉl cerca está: Su gracia y condolencia,\nEn tu dolor, saldrán a relucir.\nEspera en Dios: el Rey del universo\nPodrá tu angustia y duelo bendecir.\n",
      "\n 4. Tranquila, espera, mi alma: el tiempo avanza:\nCon tu Señor por siempre morarás:\nCon Él no habrá más llanto ni dolores:\nSerá tu Dios; y tú Le servirás\nEntonces, mi alma, libre del pecado\nTu redentor por siempre adorarás.",
      "\n 5. Ahora, mi alma, alaba al Rey benigno,\nConfía en Dios; y Dios se acercará\nMedita, mi alma, en Su Palabra santa:\nAsí tu fe se fortalecerá. \n Tranquila, espera: en medio de lo oscuro\nEl Sol de Vida resplandecerá."
    ],
  },
  {
    id: 4,
    title: "Ante el trono Celestial",
    reference: "Hebreos 4:14-16",
    verses: [
      "\n 1. Ante el trono celestial\nÉl intercede hoy por mí;\nGran Sacerdote es Jesús\nQuien por siempre vivirá.\nY en Sus manos por Su amor\nMi nombre ya grabado está;\nY mientras en Su trono esté,\nNadie de Él me apartará,\nNadie de Él me apartará.\n",
      "\n 2. Cuando he caído en tentación\nY al sentir condenación\nAl ver al cielo encontraré\nAl inocente quien murió.\nY por Su muerte el Salvador\nYa mi pecado perdonó\nPues Dios, el justo, aceptó\nSu sacrificio hecho por mí,\nSu sacrificio hecho por mí.\n",
      "\n 3. He aquí el Cordero Redentor,\nQuién al morir resucitó,\nEl inmutable gran Yo Soy,\nEl Rey de gloria y majestad.\nUnido a Él no moriré,\nPues con Su sangre me compró;\nMi vida escondida está\nEn Cristo Dios mi Salvador,\nEn Cristo Dios mi Salvador.\n"
    ],
    audioUrl: getAssetUrl('audio/4.mp3'),
  },
  {
    id: 5,
    title: "Oh, qué amor incomparable",
    reference: "1 Timoteo 1:13-14",
    verses: [
      "\n 1. Oh qué amor incomparable\nJesucristo nos mostró,\nCuando Su preciosa sangre,\nPor nosotros derramó.\n¿De Su amor, quién no recuerda?\n¿Quién no le adorará?\nQue exaltado siempre sea\nNuestro Príncipe de Paz.\n",
      "\n 2. En el monte del Calvario,\nFuentes de infinito amor;\nAquel gran día se abrieron,\n¡Oh, qué inmerecido don!\nCuál gran río, de lo alto,\nSin cesar Su amor fluyó\nSobre el mundo derramando\nPaz, justicia y amor.\n",
      "\n 3. Que busquemos cada día\nSolo el reino del Señor,\nY entreguemos nuestra vida,\nComo ofrenda de amor.\nSolo en Él nos gloriaremos,\nNada más importará;\nCristo salva, Él lo ha dicho,\nSolo en Él hay libertad.\n",
      "\n 4. Su Palabra es mi guía\nY me guía a no pecar;\nEn mi Cristo yo confío,\nNada en Él me ha de faltar.\nDe Su plenitud derrama\nSu amor y Su poder,\nEn mi ser y sin medida,\nAl rendirme a Sus pies.\n",
      "                                                          "
    ],
    audioUrl: getAssetUrl('audio/5.mp3'),
  },
  {
    id: 6,
    title: "Levántate Iglesia",
    reference: "Hebreos 12:1-2",
    verses: [
      "\n 1. Levántate, iglesia del Señor, cíñete de Su armadura;\nOye la voz de Cristo el Capitán; de Su fuerza el débil tomará.\nCon el escudo de la fe, al diablo no hemos de temer.\nEjército, armado de amor, ve y alcanza a los perdidos.\n",
      "\n 2. Nuestra misión será servir y amar, combatiendo al enemigo.\nLa espada de Su Espíritu traerá libertad a los cautivos.\nAunque haya pruebas por doquier, segura es Su salvación;\nJesús tendrá lo que ganó al morir: una herencia de naciones.\n",
      "\n 3. Mira en la cruz la gracia y el perdón, donde el Hijo fue inmolado;\nMas aplastados yacen a los pies del Señor Sus enemigos.\nConquistador, Se levantó, es Cristo quien resucitó;\nSe cantará Su triunfo hasta que todo ojo pueda verlo.\n",
      "\n 4. Su Espíritu nos llene de valor, nos dé fuerza a cada paso.\nNos dé la fe para el premio obtener de un siervo fiel y bueno.\nLos santos que lucharon ya celebran Su fidelidad;\nDios les guardó y así nos guardará hasta estar con Él en gloria.\n"
    ],
    audioUrl: getAssetUrl('audio/6.mp3'),
  },
  {
    id: 7,
    title: "Sólo En Jesús",
    reference: "Hechos 4:12",
    verses: [
      "\n 1. Solo en Jesús está mi fe, mi esperanza y mi canción.\nPiedra angular, firme sostén, inconmovible en la aflicción.\nCuán grande amor, inmensa paz, en el temor o adversidad.\nConsolador, amigo fiel, yo en Su amor me sostendré.\n",
      "\n 2. Solo en Jesús, Hijo de Dios, quien se humilló por nuestro bien.\nCordero de mi salvación, por este mundo herido fue.\nEn una cruz fue a morir, y Dios mostró Su gracia ahí.\nPues mi pecado Él llevó, en Su aflicción vida me dio.\n",
      "\n 3. En un sepulcro, Él yació, el cuerpo inerte del Señor.\nMas el tercer día llegó: ¡resucitó en gloriosa luz!\nY al triunfar sobre el mal, perdió el pecado potestad.\nDe Él suyo soy, Él mío es, pues con Su sangre me compró.\n",
      "\n 4. Desde el nacer hasta el morir, sea el poder de Cristo en mí.\nNo temeré, seguro estoy, mi vida yo a Él le doy.\nNingún poder, ningún afán de Él me arrebatará.\nHasta que Él venga otra vez, en Su poder me sostendrá.\n"
    ],
    audioUrl: getAssetUrl('audio/7.mp3'),
  },
  {
    id: 8,
    title: "Hubo Quien Por Mis Culpas",
    reference: "1 Pedro 2:24",
    verses: [
      "\n 1. Hubo quien por mis culpas muriera en la cruz,\nAunque indigno y vil como soy.\nSoy feliz, pues su sangre vertió mi Jesús,\nY con ella mis culpas borró.\n",
      "*Coro*\nMis pecados llevó, en la cruz do murió\nEl sublime, el tierno Jesús.\nLos desprecios sufrió, y mi alma salvó.\nÉl cambió mis tinieblas en luz.\n",
      "\n 2. Él es tierno y amante cual nadie lo fue,\nPues convierte al infiel corazón.\nY por esa paciencia y ternura yo sé\nQue soy libre de condenación.\n",
      "\n 3. Es mi anhelo constante a Cristo seguir.\nMi camino su ejemplo marcó.\nY por darme la vida Él quiso morir.\nEn la cruz mi pecado clavó.\n"
    ],
    audioUrl: getAssetUrl('audio/8.mp3'),
  },
  {
    id: 9,
    title: "Por La Excelsa Majestad",
    reference: "Santiago 1:17",
    verses: [
      "\n 1. Por la excelsa majestad de los cielos, tierra y mar;\npor las alas de tu amor que nos cubren sin cesar;\nTe ofrecemos, oh Señor, alabanzas con fervor.\n",
      "\n 2. Por la calma nocturnal, por la tibia luz del sol,\npor el amplio cielo azul, por el árbol, por la flor;\nTe ofrecemos, oh Señor, alabanzas con fervor.\n",
      "\n 3. Por la mente, el corazón, los sentidos que nos das,\nque tu inmensa creación nos permiten apreciar;\nTe ofrecemos, oh Señor, alabanzas con fervor.\n",
      "\n 4. Por los lazos del amor, que en familia y amistad,\nnos acercan hoy aquí y a los que partieron ya;\nTe ofrecemos, oh Señor, alabanzas con fervor.\n",
      "\n 5. Por Tu Iglesia universal que no cesa de rendir\nsu tributo de oración y de gratitud a Ti;\nTe ofrecemos, oh Señor, alabanzas con fervor.\n",
      "\n 6. Por las dádivas sin par que en el Salvador nos das:\ndel pecado remisión, santidad y vida y paz;\nTe ofrecemos, oh Señor, alabanzas con fervor.\n"
    ],
    audioUrl: getAssetUrl('audio/9.mp4'),
  },
  {
    id: 10,
    title: "Doxología",
    reference: "Romanos 11:36",
    verses: [
      "\n 1. //A Dios el Padre Celestial,\nAl Hijo nuestro Redentor,\nY al Eternal Consolador,\nUnidos todos alabad.//\nAmén."
    ],
    audioUrl: getAssetUrl('audio/10.mp3'),
  },
];