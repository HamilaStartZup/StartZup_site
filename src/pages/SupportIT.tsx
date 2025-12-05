import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";
import { useState, useEffect } from "react";

const SupportIT = () => {
  useReveal();
  
  // Données du carrousel pour "Les avantages Start IA"
  const advantagesData = [
    {
      atout: "Réseaux stables et rapides",
      description: "Une connectivité fluide pour vos équipes.",
      icon: "🌐"
    },
    {
      atout: "Protection avancée",
      description: "Sécurité 24/7 contre les cyberattaques.",
      icon: "🛡️"
    },
    {
      atout: "Réduction des coûts",
      description: "Solutions sur mesure, sans dépenses inutiles.",
      icon: "💰"
    },
    {
      atout: "Accompagnement humain",
      description: "Formation et support dédiés à vos besoins.",
      icon: "👨‍💼"
    },
    {
      atout: "Supervision continue",
      description: "Détection et correction avant la panne.",
      icon: "📊"
    },
    {
      atout: "Sérénité garantie",
      description: "Vous travaillez, nous surveillons votre IT.",
      icon: "😌"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % advantagesData.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + advantagesData.length) % advantagesData.length);
  };
  
  // Données pour le défilement automatique "Pourquoi choisir Start IA ?"
  const whyChooseUsData = [
    "Une équipe d'experts passionnés, toujours à la pointe des technologies.",
    "Des solutions modernes, simples et efficaces pour toutes les structures.",
    "Une approche sur mesure : chaque client a un interlocuteur dédié.",
    "Une vision globale : réseaux, cloud, cybersécurité et support réunis.",
    "Une proximité réelle : réactivité, transparence et engagements clairs (SLA)."
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % whyChooseUsData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Données pour le défilement automatique "En résumé"
  const summaryData = [
    {
      title: "Expertise complète",
      subtitle: "Réseau, cloud, sécurité et support réunis.",
      description: "Start IA, c'est une équipe pluridisciplinaire qui maîtrise tous les aspects de votre infrastructure informatique.",
      benefit: "Pour vous, cela signifie une approche globale et cohérente de votre transformation digitale."
    },
    {
      title: "Infogérance évolutive",
      subtitle: "Vous montez en puissance sans changer de prestataire.",
      description: "Start IA, c'est la capacité à s'adapter à votre croissance et à vos nouveaux besoins technologiques.",
      benefit: "Pour vous, cela signifie une continuité de service et une relation de confiance durable."
    },
    {
      title: "Accompagnement humain",
      subtitle: "Un expert dédié, toujours disponible.",
      description: "Start IA, c'est un engagement à vous fournir un support personnalisé et réactif.",
      benefit: "Pour vous, cela signifie une tranquillité d'esprit et une résolution rapide de vos problèmes."
    },
    {
      title: "Performance & fiabilité",
      subtitle: "Zéro panne critique, zéro surprise.",
      description: "Start IA, c'est la promesse d'une infrastructure stable et performante avec un suivi proactif.",
      benefit: "Pour vous, cela signifie une productivité optimale et une sécurité de vos données."
    }
  ];
  
  const [currentSummaryIndex, setCurrentSummaryIndex] = useState(0);
  
  // Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSummaryIndex((prev) => (prev + 1) % summaryData.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-acidgrotesk text-black-no-gradient -mb-24" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
              Support informatique & infogérance
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-black mb-6 text-left">
                Notre expertise en réseaux, serveurs et support fait la différence : performance, sécurité et fiabilité au service de votre développement.<br/><br/><br/>
              </p>
            </div>
            <Button 
              asChild
              variant="accent" 
              size="lg" 
              className="gradient-accent text-accent-foreground shadow-hero"
            >
              <a href="/contact?service=support-it">Prendre rendez-vous avec notre support IT</a>
            </Button>
          </div>
        </section>

        {/* Services IT complets */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Des services IT complets, modulables et sécurisés</h2>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Réseaux informatiques performants */}
              <Card className="border-2 hover:shadow-lg transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#22c55e' }}>Réseaux informatiques performants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-justify">
                    Nous concevons et optimisons vos réseaux internes et intersites :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Mise en place de réseaux LAN rapides et stables.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Connexion sécurisée entre plusieurs sites (WAN).<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Attribution automatique des adresses IP (DHCP) pour une gestion fluide.<br/><br/>
                  </ul>
                  <p className="text-gray-700 font-semibold text-justify">
                    Résultat : une connectivité sans interruption et une productivité maximale.
                  </p>
                </CardContent>
              </Card>

              {/* Services essentiels */}
              <Card className="border-2 hover:shadow-lg transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#22c55e' }}>Services essentiels à votre activité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-justify">
                    Nous déployons et administrons les services de base qui garantissent votre fonctionnement quotidien :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Serveurs de fichiers (FTP) : partage interne sécurisé.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Serveurs web pour vos applications internes.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Téléphonie VoIP pour réduire vos coûts et faciliter la communication.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span> Outils de supervision : visualisez l'état de vos équipements et détectez les anomalies avant qu'elles n'affectent vos équipes.<br/><br/>
                  </ul>
                </CardContent>
              </Card>

              {/* Sécurité et protection */}
              <Card className="border-2 hover:shadow-lg transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#22c55e' }}>Sécurité et protection de vos données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-justify">
                    Nous sécurisons vos infrastructures contre les menaces numériques :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Pare-feu nouvelle génération pour filtrer les attaques.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>VPN sécurisé pour vos équipes en télétravail.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Systèmes IDS/IPS : détection et blocage automatiques des intrusions.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Conformité RGPD, ISO 27001 et ANSSI.<br/><br/>
                  </ul>
                  <p className="text-gray-700 font-semibold text-justify">
                    Une sécurité robuste, conforme et invisible au quotidien.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Méthode simple et efficace */}
        <section className="py-12 lg:py-16 reveal-right" style={{ backgroundColor: '#f0fdf4' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Texte à gauche */}
              <div className="lg:order-1 lg:ml-16">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Une méthode simple et efficace</h2>
                <p className="text-lg text-black mb-6 text-justify">
                  Nous suivons une démarche structurée pour assurer la réussite de votre projet :
                </p>
                <ul className="list-disc list-inside text-black space-y-3 mb-6 text-justify">
                <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Audit et analyse de votre infrastructure existante.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Proposition de solutions adaptées à votre activité et à votre budget.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Mise en œuvre et configuration par nos techniciens certifiés.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Formation de vos équipes à l'utilisation et aux bonnes pratiques.<br/><br/>
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mr-2 text-white text-xs font-bold">✓</span>Maintenance proactive et suivi régulier pour une sécurité continue.<br/>
                </ul>
                <p className="text-lg text-black font-semibold text-justify">
                  Un système performant, évolutif et sans interruption.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* Carrousel des avantages */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Les avantages Start IA</h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Carrousel */}
              <div className="relative group">
                {/* Carte principale */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out group-hover:shadow-green-500/50 group-hover:shadow-2xl">
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-6">{advantagesData[currentIndex].icon}</div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#22c55e' }}>
                      {advantagesData[currentIndex].atout}
                    </h3>
                    <p className="text-lg text-gray-700">
                      {advantagesData[currentIndex].description}
                    </p>
                  </div>
                </div>
                
                {/* Boutons de navigation */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-green-500"
                  aria-label="Précédent"
                >
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-green-500"
                  aria-label="Suivant"
                >
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Indicateurs de pagination */}
              <div className="flex justify-center mt-8 space-x-2">
                {advantagesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-green-500 scale-125' 
                        : 'bg-gray-300 hover:bg-green-300'
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

        {/* Pourquoi choisir Start IA - Défilement automatique */}
        <section className="py-12 lg:py-16 reveal-right" style={{ backgroundColor: '#f0fdf4' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Pourquoi choisir Start IA ?</h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Zone de défilement automatique */}
              <div className="relative bg-white rounded-xl shadow-lg p-8 min-h-[120px] flex items-center justify-center shadow-green-500/50 shadow-2xl">
                <div className="text-center">
                  {/* Texte qui défile */}
                  <p className="text-lg md:text-xl text-gray-800 font-medium transition-all duration-500 ease-in-out">
                    {whyChooseUsData[currentTextIndex]}
                  </p>
                  
                  {/* Indicateurs de progression */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {whyChooseUsData.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTextIndex 
                            ? 'bg-green-500 scale-125' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Compteur */}
                  <div className="mt-4 text-sm text-gray-500">
                    {currentTextIndex + 1} / {whyChooseUsData.length}
                  </div>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Les points défilent automatiquement toutes les 3 secondes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* L'infogérance selon Start IA */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>L'infogérance selon Start IA</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-black mb-6 text-left">
                Nous devenons votre DSI externalisé.<br/><br/>
                Nos experts assurent la surveillance, la maintenance et l'évolution de vos systèmes tout en garantissant :
              </p>
              <ul className="list-disc list-inside text-black space-y-3 mb-6">
                <li>Des temps de réponse rapides.</li>
                <li>Une sécurité continue.</li>
                <li>Une planification préventive pour éviter les incidents.</li>
              </ul>
              <p className="text-lg text-black font-semibold text-left">
                Votre IT n'est plus une contrainte, c'est un moteur de performance.
              </p>
            </div>
          </div>
        </section>

        {/* En résumé - 4 bandeaux compacts */}
        <section className="py-8 lg:py-12 reveal-right" style={{ backgroundColor: '#f0fdf4' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl lg:text-2xl font-bold mb-6 font-inter text-center text-black" style={{ fontSize: '1.5rem', minHeight: 'auto' }}>En résumé</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* Bandeau 1 - Expertise complète */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 min-h-[120px] flex flex-col justify-center text-center hover:scale-125 hover:shadow-green-500/50 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
                <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-lg p-3 mb-3">
                  <h3 className="text-lg font-bold text-white mb-2">Expertise complète</h3>
                  <p className="text-sm text-green-200">Réseau, cloud, sécurité et support réunis</p>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Une équipe pluridisciplinaire qui maîtrise tous les aspects de votre infrastructure informatique.
                </p>
              </div>

              {/* Bandeau 2 - Infogérance évolutive */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 min-h-[120px] flex flex-col justify-center text-center hover:scale-125 hover:shadow-green-500/50 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
                <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-lg p-3 mb-3">
                  <h3 className="text-lg font-bold text-white mb-2">Infogérance évolutive</h3>
                  <p className="text-sm text-green-200">Vous montez en puissance sans changer de prestataire</p>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  La capacité à s'adapter à votre croissance et à vos nouveaux besoins technologiques.
                </p>
              </div>

              {/* Bandeau 3 - Accompagnement humain */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 min-h-[120px] flex flex-col justify-center text-center hover:scale-125 hover:shadow-green-500/50 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
                <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-lg p-3 mb-3">
                  <h3 className="text-lg font-bold text-white mb-2">Accompagnement humain</h3>
                  <p className="text-sm text-green-200">Un expert dédié, toujours disponible</p>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Un engagement à vous fournir un support personnalisé et réactif.
                </p>
              </div>

              {/* Bandeau 4 - Performance & fiabilité */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 min-h-[120px] flex flex-col justify-center text-center hover:scale-125 hover:shadow-green-500/50 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
                <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-lg p-3 mb-3">
                  <h3 className="text-lg font-bold text-white mb-2">Performance & fiabilité</h3>
                  <p className="text-sm text-green-200">Zéro panne critique, zéro surprise</p>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  La promesse d'une infrastructure stable et performante avec un suivi proactif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 lg:py-16 bg-green-50 text-center reveal">
          <Button 
            asChild
            variant="accent" 
            size="lg" 
            className="gradient-accent text-accent-foreground shadow-hero"
          >
            <a href="/contact?service=support-it">Prendre rendez-vous pour un audit IT</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupportIT;


