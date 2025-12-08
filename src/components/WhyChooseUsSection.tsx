import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import chgLogo from "@/assets/CHG.png";
import ibmLogo from "@/assets/ibm.png";
import mantesLogo from "@/assets/mantes.png";
import valyuLogo from "@/assets/valyu.png";
import yvelinesLogo from "@/assets/yvelines.png";
import googleLogo from "@/assets/google.png";
import microsoftLogo from "@/assets/microsoft.png";
import missionlocLogo from "@/assets/missionloc.png";
import nextdecisionLogo from "@/assets/nextdecision.png";
import regionIDFLogo from "@/assets/regionIDF.png";
import salesForceLogo from "@/assets/salesForce.png";
import trappesLogo from "@/assets/trappes.png";
import ambiLogo from "@/assets/ambi.png";
import ardLogo from "@/assets/ard.png";
import awsLogo from "@/assets/aws.png";
import intmLogo from "@/assets/intm.png";
import odooLogo from "@/assets/odoo.png";
import photoImage from "@/assets/PHOTO.jpeg";

// Fonction pour mettre le dernier mot en italique
const italicizeLastWord = (text: string) => {
  if (!text) return text;
  const words = text.trim().split(/\s+/);
  if (words.length === 0) return text;
  const lastWord = words[words.length - 1];
  const restWords = words.slice(0, -1).join(' ');
  return restWords ? (
    <>
      {restWords} <span className="italic">{lastWord}</span>
    </>
  ) : (
    <span className="italic">{lastWord}</span>
  );
};

const WhyChooseUsSection = () => {
  const [isInscriptionModalOpen, setIsInscriptionModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Envoyer les données du formulaire
    console.log("Formulaire soumis:", formData);
    // Fermer la modal après soumission
    setIsInscriptionModalOpen(false);
    // Réinitialiser le formulaire
    setFormData({ nom: "", email: "", telephone: "", ville: "", message: "" });
  };

  const advantages = [
    {
      icon: Target,
      title: "FORMEZ VOUS A LA TECH ET L'IA",
      intro: "",
      description: "",
      expansion: "",
      callToAction: "",
      opportunities: null,
      buttonText: "Inscription",
      buttonLink: "/contact"
    }
  ];

  const partnerLogos = [
    { name: "IBM", tagline: "Cloud & IA", image: ibmLogo },
    { name: "Microsoft", tagline: "Modern Workplace", image: microsoftLogo },
    { name: "Google Cloud", tagline: "Data & ML", image: googleLogo },
    { name: "CHG", tagline: "Réalité mixte", image: chgLogo },
    { name: "Mantes", tagline: "Partenariat territorial", image: mantesLogo },
    { name: "Valyu", tagline: "Partenariat", image: valyuLogo },
    { name: "Yvelines", tagline: "Partenariat territorial", image: yvelinesLogo },
    { name: "Mission Locale", tagline: "Partenariat", image: missionlocLogo },
    { name: "Next Decision", tagline: "Partenariat", image: nextdecisionLogo },
    { name: "Région IDF", tagline: "Partenariat territorial", image: regionIDFLogo },
    { name: "Salesforce", tagline: "CRM & Cloud", image: salesForceLogo },
    { name: "Trappes", tagline: "Partenariat territorial", image: trappesLogo },
    { name: "AMBI", tagline: "Partenariat", image: ambiLogo },
    { name: "ARD", tagline: "Partenariat", image: ardLogo },
    { name: "AWS", tagline: "Cloud & Scalabilité", image: awsLogo },
    { name: "INTM", tagline: "Partenariat", image: intmLogo },
    { name: "Odoo", tagline: "ERP & Business", image: odooLogo },
  ];

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % partnerLogos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [partnerLogos.length]);

  const activeIndex = offset % partnerLogos.length;

  return (
    <>
    <section className="pt-0 pb-24 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 sm:mb-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            const cardClasses = "w-full gradient-card shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1";
            
            return (
              <Card key={index} className={`${cardClasses} flex flex-col relative overflow-hidden`} style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
                <div className="absolute inset-0 bg-white/80 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px]" style={{ minHeight: 'auto', textAlign: 'left', letterSpacing: '0', fontFamily: 'monospace' }}>
                      {advantage.title === "FORMEZ VOUS A LA TECH ET L'IA" ? (
                        <>
                          {italicizeLastWord("FORMEZ VOUS")}
                          <br />
                          {italicizeLastWord("A LA TECH ET L'IA")}
                        </>
                      ) : (
                        italicizeLastWord(advantage.title)
                      )}
                    </CardTitle>
                    {advantage.intro && (
                      <p className="text-black font-semibold mb-3 text-center text-sm mt-2">{italicizeLastWord(advantage.intro)}</p>
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-4 sm:p-6">
                    <div className="flex-1">
                      {advantage.description && (
                        <p className="text-black mb-3 text-sm">{italicizeLastWord(advantage.description)}</p>
                      )}
                      
                      {advantage.expansion && (
                        <p className="text-black mb-3 text-sm">{italicizeLastWord(advantage.expansion)}</p>
                      )}
                      
                      {advantage.callToAction && (
                        <p className="text-black font-semibold mb-4">{italicizeLastWord(advantage.callToAction)}</p>
                      )}
                      
                      {advantage.opportunities && (
                        <div className="mb-4">
                          <p className="text-black font-semibold mb-2 text-sm">{italicizeLastWord(advantage.opportunities.title)}</p>
                          <ul className="space-y-1">
                            {advantage.opportunities.items.map((item, idx) => (
                              <li key={idx} className="flex items-start text-black text-sm">
                                <span className="inline-flex items-center justify-center w-3 h-3 bg-purple-500 rounded-full mr-2 text-white text-xs font-bold mt-0.5 flex-shrink-0">◆</span>
                                <span>{italicizeLastWord(item)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-8 text-center">
                      {advantage.buttonText === "Inscription" ? (
                        <Button 
                          onClick={() => setIsInscriptionModalOpen(true)}
                          variant="accent" 
                          size="lg" 
                          className="gradient-accent text-accent-foreground shadow-hero"
                        >
                          {advantage.buttonText}
                        </Button>
                      ) : (
                        <Button 
                          asChild
                          variant="accent" 
                          size="lg" 
                          className="gradient-accent text-accent-foreground shadow-hero"
                        >
                          <a href={advantage.buttonLink || "/contact"}>{advantage.buttonText || "Contactez-nous"}</a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Formation IBM */}
        <div className="mt-6 sm:mt-8 w-full">
          <Card className="shadow-card hover:shadow-hero transition-all duration-300 border border-black/20 overflow-hidden flex flex-col" style={{ background: 'linear-gradient(180deg, hsl(320 100% 95%), hsl(280 100% 92%), hsl(60 100% 90%), hsl(30 100% 88%))' }}>
            <CardContent className="p-5 md:p-6 flex-1 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-1 space-y-3">
                <p className="text-xs font-semibold text-black uppercase tracking-wide">
                  Des parcours certifiants 100% en <span className="italic">ligne.</span>
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Formez-vous gratuitement<br />
                  avec IBM Skills <span className="italic">Build</span>
                </h3>
                <div className="space-y-2 pt-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black font-medium text-sm">
                      <span className="font-bold">Hardskills</span> : Les essentiels de la <span className="italic">Tech</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black font-medium text-sm">
                      <span className="font-bold">Soft skills</span> : Compétences professionnelles et savoir <span className="italic">être</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button asChild variant="accent" size="default" className="gradient-accent text-accent-foreground shadow-hero">
                  <a href="/contact">Accéder à notre programme !</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deux nouvelles cartes */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 mt-8 sm:mt-12">
          <div className="border border-border/50 rounded-lg p-4 sm:p-6 shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer hover-tilt-outline flex flex-col aspect-[4/3] relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
            <div className="absolute inset-0 bg-white/80 z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="font-bold mb-3 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px]" style={{ textAlign: 'left', letterSpacing: '0', fontFamily: 'monospace' }}>{italicizeLastWord("FORMEZ VOS COLLABORATEURS À L'IA")}</h4>
              <p className="mb-0 text-black text-justify"></p>
              <div className="mt-auto text-center">
                <Button asChild variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white transition-colors">
                  <a href="/formation">Découvrir</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-border/50 rounded-lg p-4 sm:p-6 shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer hover-tilt-outline flex flex-col aspect-[4/3] relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
            <div className="absolute inset-0 bg-white/80 z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="font-bold mb-3 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px]" style={{ textAlign: 'left', letterSpacing: '0', fontFamily: 'monospace' }}>{italicizeLastWord("LE BOARD START-ZUP")}</h4>
              <p className="mb-0 text-black text-justify"></p>
              <div className="mt-auto text-center">
                <Button asChild variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white transition-colors">
                  <a href="/board">Découvrir</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Formation Entreprise */}
        <div className="mt-8 w-full">
          <Card className="shadow-card hover:shadow-hero transition-all duration-300 border border-black/20 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(320 100% 95%), hsl(280 100% 92%), hsl(60 100% 90%), hsl(30 100% 88%))' }}>
            <CardContent className="p-5 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="flex-1">
                <div className="mb-4">
                  <img 
                    src={photoImage} 
                    alt="Formation entreprise IA" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>

    {/* Carousel Partenaires */}
    <section className="pt-0 pb-24 lg:pb-32 bg-white">
      <div className="mt-0 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white shadow-card p-8 lg:p-10 border border-border/50">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-widest text-gray-500">Nos partenaires</p>
            <h3 className="text-3xl font-bold mt-3 text-slate-900">Un réseau solide pour accélérer vos projets</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((index) => {
              const partner = partnerLogos[(offset + index) % partnerLogos.length];
              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="rounded-2xl border border-border/40 p-6 text-center flex flex-col items-center justify-center bg-slate-50"
                >
                  {partner.image ? (
                    <div className="w-full h-24 flex items-center justify-center">
                      <img src={partner.image} alt={partner.name} className="max-w-full max-h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-2xl font-semibold shadow-md">
                      {partner.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Modal Inscription */}
    <Dialog open={isInscriptionModalOpen} onOpenChange={setIsInscriptionModalOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black">Inscription aux formations</DialogTitle>
          <DialogDescription className="text-black">
            Start ZUP vous accompagne pas à pas pour développer vos compétences numériques et vous ouvrir les portes des métiers de la tech et de l'IA.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Texte de présentation */}
          <div className="space-y-4">
            <p className="text-black leading-relaxed">
              Start ZUP vous accompagne pas à pas pour développer vos compétences numériques et vous ouvrir les portes des métiers de la tech et de l'IA. Notre mission est simple : rendre ces métiers accessibles, quels que soient votre parcours ou votre niveau de départ.
            </p>
            <p className="text-black leading-relaxed">
              Avec ou sans diplôme, vous pouvez rejoindre nos formations. Notre seul critère de sélection : votre motivation.
            </p>
            <p className="text-black leading-relaxed">
              Découvrez nos parcours professionnalisants en Développement, Réseaux & Cybersécurité, et Data / IA, conçus pour vous donner les compétences concrètes recherchées par les entreprises.
            </p>
          </div>

          {/* Information sur les implantations */}
          <div className="mt-8 p-6 rounded-lg border-2" style={{ background: 'linear-gradient(135deg, hsl(59 130 246 / 0.1), hsl(139 92 246 / 0.1))', borderColor: 'hsl(251 146 60 / 0.3)' }}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: 'hsl(251 146 60)' }}></div>
              <div>
                <p className="text-black leading-relaxed font-semibold mb-2">
                  Notre programme est implanté dans trois zones :
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-black bg-white border-2" style={{ borderColor: 'hsl(251 146 60)' }}>
                    Mantes-la-Jolie (78)
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-black bg-white border-2" style={{ borderColor: 'hsl(251 146 60)' }}>
                    Trappes (78)
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-black bg-white border-2" style={{ borderColor: 'hsl(251 146 60)' }}>
                    Paris 19 ème (75)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Espace pour les vidéos - 3 vignettes */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Découvrez Start-Zup en vidéo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fEXVW-0MPhI?start=4"
                  title="Formation Start Zup 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/7gsY7SYxick?start=1"
                  title="Formation Start Zup 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uwkJNPBe5Po?start=1"
                  title="Formation Start Zup 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-black mb-2">
                  Nom complet *
                </label>
                <Input
                  id="nom"
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-black mb-2">
                  Téléphone *
                </label>
                <Input
                  id="telephone"
                  type="tel"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="ville" className="block text-sm font-medium text-black mb-2">
                  Ville *
                </label>
                <Input
                  id="ville"
                  type="text"
                  required
                  value={formData.ville}
                  onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                  className="w-full"
                  placeholder="Votre ville"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message (optionnel)
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full"
                rows={4}
                placeholder="Dites-nous en plus sur vos motivations..."
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="accent" size="lg" className="gradient-accent text-accent-foreground shadow-hero">
                Envoyer ma demande
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default WhyChooseUsSection;