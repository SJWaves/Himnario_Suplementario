import { ArrowLeft, ExternalLink, Book, Church, Code, Youtube } from "lucide-react";

interface AboutScreenProps {
  onBack: () => void;
}

export function AboutScreen({ onBack }: AboutScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white">
      {/* Header */}
      <div className="bg-[#000000] text-white px-4 py-4 flex items-center gap-4 flex-shrink-0">
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors"
          aria-label="Volver"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="flex-1 font-['Roboto'] text-[18px]">Acerca de</h2>
      </div>

      {/* Content */}
      <div className="scrollbar-app flex-1 min-h-0 overflow-y-auto pb-20">
        <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
          
          {/* About the Hymnal */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Book className="w-6 h-6 text-[#C9A958]" />
              <h3 className="font-['Roboto'] text-[20px] sm:text-[22px] text-[#333333] font-semibold">
                Sobre el Himnario
              </h3>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#C9A958] p-5 rounded-r-lg space-y-3">
                            {/* Hymnal Logo */}
              <div className="flex justify-center mb-4">
                <img 
                  src={`${import.meta.env.BASE_URL}Logo_Himnario.png`}
                  alt="Himnario Suplementario de Himnos y Cantos Congregacionales" 
                  className="w-28 h-24 sm:w-28 sm:h-28 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h4 className="font-['Roboto'] text-[16px] sm:text-[18px] text-[#C9A958] font-medium">
                Himnario Suplementario de Himnos y Cantos Congregacionales
              </h4>
              <p className="font-['Roboto'] text-[14px] sm:text-[15px] text-[#555555] leading-relaxed text-justify">
                Este himnario digital ha sido creado con el propósito de facilitar el acceso 
                a los himnos de adoración de nuestra congregación. Incluye una selección cuidadosa 
                de himnos clásicos y contemporáneos, cada uno acompañado de sus referencias bíblicas 
                y respetando los créditos a sus autores y compositores originales.
              </p>
              <div className="bg-white border border-[#C9A958]/30 p-4 rounded-lg mt-4">
                <p className="font-['Roboto'] text-[13px] sm:text-[14px] text-[#666666] italic text-center leading-relaxed">
                  "Hablando entre vosotros con salmos, con himnos y cánticos espirituales, 
                  cantando y alabando al Señor en vuestros corazones."
                </p>
                <p className="font-['Roboto'] text-[12px] sm:text-[13px] text-[#C9A958] text-center mt-2 font-medium">
                  — Efesios 5:19
                </p>
              </div>
              <p className="font-['Roboto'] text-[13px] sm:text-[14px] text-[#666666] mt-3 text-justify">
                <strong>Nota:</strong> Todos los himnos incluidos respetan la propiedad intelectual 
                de sus autores originales, incluyendo compositores como Thomas Ken, Keith Getty, 
                Jean Sibelius, entre otros destacados siervos del Señor.
              </p>
            </div>
          </section>

          {/* About the Church */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Church className="w-6 h-6 text-[#C9A958]" />
              <h3 className="font-['Roboto'] text-[20px] sm:text-[22px] text-[#333333] font-semibold">
                Nuestra Iglesia
              </h3>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#C9A958] p-5 rounded-r-lg space-y-3">
              {/* Church Logo */}
              <div className="flex justify-center mb-4">
                <img 
                  src={`${import.meta.env.BASE_URL}Logo_Iglesia.png`}
                  alt="Iglesia Cristiana Bíblica de Fusagasugá" 
                  className="w-28 h-24 sm:w-28 sm:h-28 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h4 className="font-['Roboto'] text-[16px] sm:text-[18px] text-[#C9A958] font-medium">
                Iglesia Cristiana Bíblica (ICB) Fusagasugá
              </h4>
              <p className="font-['Roboto'] text-[14px] sm:text-[15px] text-[#555555] leading-relaxed text-justify">
                Somos una comunidad de fe dedicada a la exaltación de la gloria de Dios. 
                Nuestra base es la sana doctrina de las Sagradas Escrituras, enfocándonos en 
                la adoración reverente, el discipulado bíblico y la proclamación fiel del 
                Evangelio de Jesucristo.
              </p>
              <p className="font-['Roboto'] text-[14px] sm:text-[15px] text-[#555555] leading-relaxed text-justify">
                Nos congregamos en Fusagasugá, Colombia, con el firme propósito de glorificar 
                a Dios a través de la enseñanza expositiva de Su Palabra, la comunión fraterna 
                y el servicio en amor.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://www.icbfusa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A958] hover:bg-[#B8984A] text-white rounded-lg transition-colors font-['Roboto'] text-[14px] sm:text-[15px]"
                >
                  <span>Visitar sitio web</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@ICBFusa/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-['Roboto'] text-[14px] sm:text-[15px]"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Canal de YouTube</span>
                </a>
              </div>
            </div>
          </section>

          {/* Development Credits */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-[#C9A958]" />
              <h3 className="font-['Roboto'] text-[20px] sm:text-[22px] text-[#333333] font-semibold">
                Créditos de Desarrollo
              </h3>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#C9A958] p-5 rounded-r-lg space-y-3">
              <p className="font-['Roboto'] text-[14px] sm:text-[15px] text-[#555555] leading-relaxed text-justify">
                Esta aplicación fue diseñada y desarrollada con dedicación por <strong className="text-[#C9A958]">Sara Julieth Martínez Arias</strong>, 
                como una herramienta de servicio para facilitar la adoración congregacional y 
                glorificar a Dios a través de himnos solemnes.
              </p>
              <div className="bg-white border border-gray-200 p-4 rounded-lg mt-3">
                <p className="font-['Roboto'] text-[13px] sm:text-[14px] text-[#666666] text-center">
                  <em>"Todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres."</em>
                  <br />
                  <span className="text-[#C9A958] text-[12px] sm:text-[13px] font-medium">— Colosenses 3:23</span>
                </p>
              </div>
            </div>
          </section>

          {/* Version Info */}
          <section className="pt-6 border-t border-gray-200">
            <div className="text-center space-y-2">
              <p className="font-['Roboto'] text-[14px] text-[#888888]">
                Himnario Suplementario
              </p>
              <p className="font-['Roboto'] text-[13px] text-[#999999]">
                Versión 1.1.1
              </p>
              <p className="font-['Roboto'] text-[12px] text-[#AAAAAA]">
                © 2026 Iglesia Cristiana Bíblica Fusagasugá
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
