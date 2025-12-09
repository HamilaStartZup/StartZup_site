import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

const Cybersecurite = () => {
  useReveal();
  
  // Données du carrousel
  const carouselData = [
    {
      aspect: "Protection 24/7",
      description: "Détection et réponse en continu.",
      icon: "🛡️"
    },
    {
      aspect: "Technologie de pointe",
      description: "SIEM, CTI, scans de vulnérabilités.",
      icon: "🔬"
    },
    {
      aspect: "Accompagnement humain",
      description: "Expert dédié, vulgarisation, suivi.",
      icon: "👨‍💼"
    },
    {
      aspect: "Déploiement rapide",
      description: "Prise en main en quelques heures.",
      icon: "⚡"
    },
    {
      aspect: "Tarif accessible",
      description: "Abonnement flexible, sans surcoût caché.",
      icon: "💰"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };
  return (
    <div className="min-h-screen bg-red-50">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-acidgrotesk text-black-no-gradient -mb-24" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
              Cybersécurité 
                </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 text-center">
                  Surveillance 24/7, détection en temps réel et accompagnement humain pour sécuriser vos données sans exploser votre budget.
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
                <a href="/contact?service=cybersecurite">Prendre rendez-vous pour un audit cybersécurité</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Notre solution SOC pour PME/TPE */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 bg-slate-800 p-8 rounded-lg" style={{ backgroundColor: '#1F2937' }}>
              <p className="text-lg mb-4 text-white text-justify">
                Aujourd'hui, aucune entreprise n'est à l'abri des cybermenaces : vol de données, rançongiciels, phishing, intrusion dans les systèmes…
              </p>
              <p className="text-lg mb-4 text-white text-justify">
                Et pourtant, les solutions de cybersécurité restent souvent hors de portée des petites structures, conçues pour les grands comptes avec des budgets colossaux.
              </p>
              <p className="text-lg mb-4 text-white text-justify">
                Chez Start IA, nous avons décidé de changer la donne : notre SOC sur-mesure offre aux TPE/PME une protection complète, simple et accessible, sans matériel à acheter ni coûts cachés.
              </p>
              <p className="text-lg mb-6 text-white text-justify">
                Protégez vos données, vos collaborateurs et votre réputation, tout en gardant la maîtrise de votre budget.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Texte */}
              <div className="lg:order-2">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Un SOC sur-mesure pensé pour les petites entreprises</h2>
                <p className="text-lg text-black text-justify">
                  La cybersécurité ne devrait pas être un luxe réservé aux grandes entreprises.<br/><br/>
Notre Security Operations Center (SOC) a été conçu pour les TPE et PME, afin de vous offrir une défense de niveau grand compte, sans la complexité technique ni le coût.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre proposition de valeur */}
        <section className="py-12 lg:py-16 bg-red-50 reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 font-inter text-center px-4 text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Notre proposition de valeur</h2>
            
            {/* Layout avec texte à gauche et images à droite */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Texte à gauche */}
              <div className="lg:order-1 flex-1 flex justify-center">
                <div className="max-w-2xl">
                  <p className="text-sm sm:text-base md:text-lg text-left text-black px-4 lg:px-0">
                <strong>Protection, surveillance, accompagnement</strong> : une cybersécurité <strong>accessible et efficace.</strong><br/><br/>
<strong>Notre impact :</strong><br/><br/>
<span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Surveillance 24/7 de vos systèmes<br/>
<span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Détection en temps réel des menaces<br/>
<span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Accompagnement humain et pédagogique<br/>
<span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Rapports clairs et actionnables<br/><br/>
<strong>Une sécurité de niveau entreprise, adaptée aux PME.</strong><br/>
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Pourquoi c'est différent ? */}
        <section className="py-12 lg:py-16 bg-red-50 reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Les fonctionnalités clés de notre solution SOC</h2>
            {/* Grille des 4 premières cartes */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="border-2 hover:shadow-lg hover:shadow-red-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#ff2d55' }}>Surveillance 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-justify">
                    Nos outils surveillent en continu vos systèmes, serveurs, réseaux et postes de travail.
                    Chaque activité suspecte est détectée en temps réel, jour et nuit, par nos analystes SOC.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-lg hover:shadow-red-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#ff2d55' }}>Détection en temps réel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-justify">
                    Grâce à nos technologies avancées :<br/>
                    <strong>SIEM :</strong> Qradar, Splunk, Wazuh<br/>
                    <strong>Scans de vulnérabilité & tests de pénétration</strong><br/>
                    <strong>Cyber Threat Intelligence (CTI) :</strong> veille OSINT<br/><br/>
                    Nous détectons rapidement ransomwares, connexions suspectes, et tentatives d'intrusion avant qu'elles ne causent des dommages.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-lg hover:shadow-red-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#ff2d55' }}>Alerte intelligentes et priorisées</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-justify">
                    Vous ne recevez que les alertes qui comptent.<br/><br/>
                    Notre système filtre, classe et simplifie les notifications pour que vous puissiez agir sans être submergé.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-lg hover:shadow-red-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#ff2d55' }}>Rapports clairs et actionnables</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-justify">
                    Recevez des rapports réguliers simples à comprendre, même sans équipe IT.<br/><br/>
                    Chaque rapport inclut des recommandations concrètes pour corriger les failles et renforcer votre sécurité.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Carte centrée - Accompagnement humain */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <Card className="border-2 hover:shadow-lg hover:shadow-red-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)' }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-center" style={{ color: '#ff2d55' }}>Accompagnement humain et pédagogique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-justify">
                      Nos clients ne sont pas des experts en cybersécurité — et c'est normal.<br/><br/>
                      Un expert dédié vous accompagne, vulgarise les informations et vous aide à faire progresser votre niveau de sécurité au fil du temps.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gouvernance claire */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Une gouvernance claire : CGV & COPIL cybersécurité</h2>
            <p className="text-lg text-black mb-12 text-center">
              Pour un suivi régulier et une amélioration continue, nous mettons en place deux comités complémentaires :
            </p>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CGV */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#ff2d55' }}>Comité de Gestion des Vulnérabilités (CGV)</h3>
                <p className="text-black mb-4 text-justify">
                  <strong>Rôle :</strong> superviser, prioriser et suivre les vulnérabilités identifiées.
                </p>
                <div className="mb-4">
                  <span className="text-black font-semibold">Objectifs :</span>
                  <div className="mt-2 text-black">
                    <div className="flex items-start mb-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                      <span>Valider les plans de remédiation</span>
                    </div>
                    <div className="flex items-start mb-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                      <span>Prioriser selon les niveaux de risque</span>
                    </div>
                    <div className="flex items-start mb-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                      <span>Garantir l'application des bonnes pratiques</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-black font-semibold">Composition :</span><br/>
                  <span className="text-black text-justify">Responsable sécurité (RSSI), équipes techniques, SOC, correspondants métiers, DPO</span>
                </div>
                <div>
                  <span className="text-black font-semibold">Fréquence :</span> <span className="text-black text-justify">hebdomadaire ou bihebdomadaire</span>
                </div>
              </div>

              {/* COPIL */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#ff2d55' }}>Comité de Pilotage Cybersécurité (COPIL)</h3>
                <p className="text-black mb-4 text-justify">
                  <strong>Rôle :</strong> piloter la stratégie cybersécurité globale.
                </p>
                <div className="mb-4">
                  <span className="text-black font-semibold">Objectifs :</span>
                  <div className="mt-2 text-black">
                    <div className="flex items-start mb-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                      <span>Définir la feuille de route et les budgets</span>
                    </div>
                    <div className="flex items-start mb-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                      <span>Suivre les indicateurs de sécurité (KPI/KRI)</span>
                    </div>
                    <div className="flex items-start mb-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                      <span>Garantir la conformité RGPD, NIS2, ISO, etc.</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-black font-semibold">Composition :</span><br/>
                  <span className="text-black text-justify">DSI / RSSI / Direction des risques / DPO / métiers clés</span>
                </div>
                <div>
                  <span className="text-black font-semibold">Fréquence :</span> <span className="text-black text-justify">mensuelle ou trimestrielle</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi notre approche est différente */}
        <section className="py-12 lg:py-16 bg-red-50 reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Pourquoi notre approche est différente</h2>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Accessibilité financière */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#ff2d55' }}>Accessibilité financière</h3>
                <div className="text-black space-y-2">
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Aucun matériel à acheter</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Abonnement mensuel clair et transparent</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Tarification flexible selon la taille de votre entreprise</span>
                  </div>
                </div>
              </div>

              {/* Déploiement simple et rapide */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#ff2d55' }}>Déploiement simple et rapide</h3>
                <div className="text-black space-y-2">
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Installation légère (agent ou collecte cloud)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Mise en service en quelques heures</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Aucun impact sur vos opérations</span>
                  </div>
                </div>
              </div>

              {/* Solution modulaire et évolutive */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#ff2d55' }}>Solution modulaire et évolutive</h3>
                <div className="text-black space-y-2">
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Une protection de base, ensuite ajouter<br/> EDR, PRA/PCA...</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5">✓</span>
                    <span>Vous ne payez que ce dont vous avez besoin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Test gratuit */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Essayez gratuitement notre solution pendant 1 mois</h2>
            <p className="text-lg text-black mb-8 max-w-4xl mx-auto text-justify">
              Avant de vous engager, testez notre SOC gratuitement pendant 30 jours.<br/><br/>
              Vous découvrirez :<br/>
              <strong>Des alertes et rapports en conditions réelles</strong><br/>
              <strong>L'accompagnement d'un expert dédié</strong><br/>
              <strong>Un aperçu clair de votre niveau de sécurité actuel</strong><br/><br/>
              Si vous êtes convaincu, vous continuez. Sinon, vous arrêtez — sans aucun engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="accent" size="lg" className="gradient-accent text-accent-foreground shadow-hero">
                <a href="/contact">Je teste gratuitement mon SOC maintenant</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-black group"
              >
                <a href="/contact?service=cybersecurite">Prendre rendez-vous avec un expert cybersécurité</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Carrousel récapitulatif */}
        <section className="py-12 lg:py-16 bg-red-50 reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>En résumé : la cybersécurité Start IA, c'est…</h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Carrousel */}
              <div className="relative group">
                {/* Carte principale */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out group-hover:shadow-red-500/50 group-hover:shadow-2xl">
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-6">{carouselData[currentIndex].icon}</div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#ff2d55' }}>
                      {carouselData[currentIndex].aspect}
                    </h3>
                    <p className="text-lg text-gray-700">
                      {carouselData[currentIndex].description}
                    </p>
                  </div>
                </div>
                
                {/* Boutons de navigation */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-red-500"
                  aria-label="Précédent"
                >
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-red-500"
                  aria-label="Suivant"
                >
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Indicateurs de pagination */}
              <div className="flex justify-center mt-8 space-x-2">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-red-500 scale-125' 
                        : 'bg-gray-300 hover:bg-red-300'
                    }`}
                    aria-label={`Aller à la slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation par clavier */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Utilisez les flèches ou cliquez sur les points pour naviguer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 lg:py-16 bg-red-50 text-center reveal">
          <Button 
            asChild
            variant="accent" 
            size="lg" 
            className="gradient-accent text-accent-foreground shadow-hero"
          >
            <a href="/contact?service=cybersecurite">Réservez votre audit cybersécurité gratuit</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurite;


