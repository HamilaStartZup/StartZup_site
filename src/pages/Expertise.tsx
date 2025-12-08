import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

const Expertise = () => {
  useReveal();
  const [activeTab, setActiveTab] = useState("solutions-ia");
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative flex items-center justify-center -mb-4">
              <h1 className="title-acidgrotesk text-black-no-gradient -mb-24 text-3xl sm:text-4xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
                Expertise
            </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl -mb-8 sm:-mb-16 mx-auto text-center px-4">
            Développez vos compétences et prenez une longueur d'avance<br/>
            L'IA n'est pas une menace. C'est une opportunité.
            </p>
            
            {/* Section d'espacement */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
            <div className="mt-4 sm:mt-8">
              <Button 
                asChild
                variant="accent" 
                size="lg" 
                className="gradient-accent text-accent-foreground shadow-hero w-full sm:w-auto"
              >
                <a href="/contact?service=expertise">Prendre rendez-vous</a>
              </Button>
            </div>
          </div>
        </section>

        {/* L'IA, une compétence devenue incontournable */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 font-inter text-center px-4 text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>L'IA, une compétence devenue incontournable</h2>
            
            <div className="max-w-5xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-0 mb-8" style={{ background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' }}>
                  <TabsTrigger 
                    value="solutions-ia" 
                    className="text-black text-xs sm:text-sm transition-all"
                    style={{ 
                      background: activeTab === "solutions-ia" ? 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))' : 'transparent'
                    }}
                  >
                    Solutions IA
                  </TabsTrigger>
                  <TabsTrigger 
                    value="support-it" 
                    className="text-black text-xs sm:text-sm transition-all"
                    style={{ 
                      background: activeTab === "support-it" ? 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))' : 'transparent'
                    }}
                  >
                    Support IT & Cybersécurité
                  </TabsTrigger>
                  <TabsTrigger 
                    value="poc" 
                    className="text-black text-xs sm:text-sm transition-all"
                    style={{ 
                      background: activeTab === "poc" ? 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))' : 'transparent'
                    }}
                  >
                    Création de POC
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="solutions-ia" className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-2" style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))' }}>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-black">Solutions IA et processus automatisés</h3>
                  <p className="text-black mb-6 text-justify">
                    L'intégration de solutions d'intelligence artificielle et de processus automatisés est devenue un levier essentiel pour les entreprises qui souhaitent gagner en efficacité, réduire leurs coûts opérationnels et améliorer leur qualité de service.
                  </p>
                  <p className="text-black mb-6 text-justify">
                    Nous accompagnons PME, startups et entrepreneurs dans la mise en place de solutions IA sur mesure, adaptées à leurs objectifs business.
                  </p>

                  <div className="space-y-6">
                    {/* Audit & Diagnostic IA */}
                    <div className="bg-white/80 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-black">Audit & Diagnostic IA</h4>
                      <p className="text-black mb-4 text-justify">
                        Nous analysons vos processus internes pour identifier :
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Les tâches répétitives à automatiser</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Les opportunités IA adaptées à votre activité</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Les gains immédiats en temps, productivité et qualité</span>
                        </li>
                      </ul>
                    </div>

                    {/* Solutions IA Personnalisées */}
                    <div className="bg-white/80 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-black">Solutions IA Personnalisées</h4>
                      <p className="text-black mb-4 text-justify">
                        Nous concevons ou intégrons des outils IA adaptés à vos besoins :
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Agents IA (support client, RH, commercial)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Analyse automatisée de documents (factures, contrats, mails)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>IA de production de contenus (marketing, juridique, commercial)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Modèles IA privés et sécurisés sur vos données internes</span>
                        </li>
                      </ul>
                    </div>

                    {/* Automatisation des Workflows */}
                    <div className="bg-white/80 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-black">Automatisation des Workflows</h4>
                      <p className="text-black mb-4 text-justify">
                        Nous construisons des workflows intelligents pour fluidifier vos opérations :
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Automatisations marketing (CRM, emailing, suivi clients)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Automatisation financière & administrative</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Automatisation RH (suivi, onboarding, reporting)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Intégration CRM / ERP / outils métiers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Connecteurs API et solutions no-code (Make, Zapier, n8n)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Formation & Accompagnement IA */}
                    <div className="bg-white/80 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-black">Formation & Accompagnement IA</h4>
                      <p className="text-black mb-4 text-justify">
                        Des formations adaptées à tous les niveaux :
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Comprendre l'IA générative</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Utiliser ChatGPT et les IA métiers au quotidien</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Créer des prompts professionnels</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Concevoir une automatisation de A à Z</span>
                        </li>
                      </ul>
                    </div>

                    {/* Support & Optimisation Continue */}
                    <div className="bg-white/80 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-black">Support & Optimisation Continue</h4>
                      <p className="text-black mb-4 text-justify">
                        Nous restons à vos côtés pour assurer :
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>La maintenance et l'évolution de vos solutions IA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>L'optimisation des automatisations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>L'intégration de nouveaux cas d'usage</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Une veille technologique dédiée</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-black mb-6 mt-6 text-center text-lg font-semibold">
                    Accélérez la croissance de votre entreprise grâce à l'IA !
                  </p>

                  <div className="text-center">
                    <Button 
                      asChild
                      variant="accent" 
                      size="lg" 
                      className="gradient-accent text-accent-foreground shadow-hero"
                    >
                      <a href="/contact">Contactez-nous</a>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="support-it" className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-2" style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))' }}>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-black">Support IT et Cybersécurité</h3>
                  <p className="text-black mb-6 text-justify">
                    Une infrastructure maîtrisée, une sécurité renforcée : nous accompagnons votre organisation vers l'excellence opérationnelle.
                  </p>

                  <div className="space-y-6">
                    {/* Support & Infrastructures IT */}
                    <div className="bg-white/80 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-black">Support & Infrastructures IT</h4>
                      <p className="text-black mb-4 text-justify">
                        De la mise en place de votre cloud à la gestion de vos outils du quotidien :
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Cloud Microsoft Azure, Amazon AWS, Google GCP</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Solutions ITSM / ServiceNow</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Support & supervision: Teams, SharePoint, OneDrive, Copilot AI</span>
                        </li>
                      </ul>
                      <p className="text-black mt-4 text-justify font-semibold">
                        Notre objectif : vous garantir une informatique simple, performante et sécurisée.
                      </p>
                    </div>

                    {/* Cybersécurité – SOC Analyst */}
                    <div className="bg-white/80 p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-black">Cybersécurité – SOC Analyst</h4>
                      <p className="text-black mb-4 text-justify">
                        La cybersécurité ne doit plus être un luxe réservé aux grands groupes.
                      </p>
                      <p className="text-black mb-4 font-semibold">Notre SOC sur-mesure vous offre :</p>
                      <ul className="space-y-2 text-black mb-4">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Surveillance 24/7 de vos systèmes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Détection et réponse immédiate aux menaces</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                          <span>Rapports clairs et accompagnement humain</span>
                        </li>
                      </ul>
                      <p className="text-black text-justify">
                        Vous protégez vos données sans complexité ni budget démesuré.
                      </p>
                    </div>
              </div>
              
                  <div className="mt-6 text-center">
                    <Button 
                      asChild
                      variant="accent" 
                      size="lg" 
                      className="gradient-accent text-accent-foreground shadow-hero"
                    >
                      <a href="/contact">Contactez-nous</a>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="poc" className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-2" style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))' }}>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-black">Création de POC (entreprises + entrepreneurs et porteurs de projets)</h3>
                  <p className="text-black mb-6 text-justify">
                    Vous êtes porteur de projet, entrepreneur ou une entreprise ? Donnez vie à vos idées grâce à un POC.
                  </p>

                  <div className="bg-white/80 p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-bold mb-4 text-black">Notre accompagnement</h4>
                    <p className="text-black mb-4 text-justify">
                      Chez Start Zup, nous vous aidons à transformer votre concept en un POC solide, pertinent et opérationnel.
                    </p>
                    <p className="text-black mb-4 font-semibold">Nous mettons à votre disposition :</p>
                    <ul className="space-y-3 text-black mb-4">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                        <span>Un accompagnement personnalisé pour clarifier votre besoin et structurer votre idée.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                        <span>Une équipe de talents formés (data, IA, développement, cybersécurité) pour concevoir un POC qui répond à vos enjeux.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                        <span>Un suivi méthodologique pour vous guider à chaque étape, de l'idéation à la mise en test.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full mr-2 text-white text-xs font-bold mt-1">✓</span>
                        <span>Des conseils stratégiques pour analyser les résultats, ajuster votre projet et préparer la suite (MVP, développement complet, présentation à des investisseurs, etc.).</span>
                      </li>
                    </ul>
                    <p className="text-black text-justify font-semibold">
                      Notre objectif est simple : vous permettre de valider rapidement votre solution, d'accélérer votre innovation et de sécuriser vos décisions.
                </p>
              </div>

                  <p className="text-black mb-6 text-center text-lg font-semibold">
                    Prêt à concrétiser votre idée ? Nous sommes là pour vous accompagner.
                  </p>

                  <div className="text-center">
                    <Button 
                      asChild
                      variant="accent" 
                      size="lg" 
                      className="gradient-accent text-accent-foreground shadow-hero"
                    >
                      <a href="/contact">Contactez-nous</a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Expertise;


