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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import parisCodeLogo from "@/assets/Logopariscode_nef_fond_blanc.png";
import parisLogo from "@/assets/Logo-Ville-de-Paris-874x768-site.png";
import perqoLogo from "@/assets/LE-PERQO-LOGO-FOND-BLANC.jpg";
import photoImage from "@/assets/WhatsApp2.jpeg";

// Fonction pour retourner le texte sans modification
const italicizeLastWord = (text: string) => {
  return text;
};

const WhyChooseUsSection = () => {
  const [isInscriptionModalOpen, setIsInscriptionModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    adresse: "",
    ville: "",
    codePostal: "",
    formation: "",
    situationProfessionnelle: "",
    numeroFranceTravail: "",
    niveauDiplome: "",
    commentConnu: "",
    competencesInformatiques: "",
    langagesInformatiques: "",
    cv: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY as string | undefined;
      if (!apiKey) {
        throw new Error("Clé API Airtable manquante (VITE_AIRTABLE_API_KEY)");
      }

      const baseId = "appfuYpY01OfMadmg";
      const tableIdOrName = "tblYXu5izSmA9kCps";
      const url = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`;

      const headers = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      } as const;

      // Mapping des valeurs du formulaire vers les textes Airtable pour les champs Select
      const situationProfessionnelleMap: { [key: string]: string } = {
        "etudiant": "Étudiant",
        "actif": "Actif",
        "demandeur-emploi": "Demandeur d'emploi",
        "entreprise": "Entreprise",
      };

      const competencesInformatiquesMap: { [key: string]: string } = {
        "debutant": "Débutant",
        "intermediaire": "Intermédiaire",
        "avance": "Avancé",
      };

      const commentConnuMap: { [key: string]: string } = {
        "internet": "Internet",
        "reseau-personnel": "Réseau personnel",
        "mission-locale-france-travail": "Mission locale / France travail",
        "autre": "Autre",
      };

      const niveauDiplomeMap: { [key: string]: string } = {
        "niveau-3": "Niveau 3 (CAP, BEP)",
        "niveau-4": "Niveau 4 (Baccalauréat, BP)",
        "niveau-5": "Niveau 5 (BTS, DUT, DEUST)",
        "niveau-6": "Niveau 6 (BUT, Licence, Licence professionnelle, Maîtrise)",
        "niveau-7": "Niveau 7 (Master, diplôme d'études approfondies, diplôme d'études supérieures spécialisées, diplôme d'ingénieur)",
        "niveau-8": "Niveau 8 (Doctorat, habilitation à diriger des recherches)",
      };

      const payload = {
        records: [
          {
            fields: {
              "Nom": formData.nom,
              "Prénom": formData.prenom,
              "Date de naissance": formData.dateNaissance,
              "Adresse": formData.adresse,
              "Ville": formData.ville,
              "Code Postal": formData.codePostal,
              "Sélectionner une formation": formData.formation,
              "Situation professionnelle": situationProfessionnelleMap[formData.situationProfessionnelle] || formData.situationProfessionnelle,
              "Numéro france travail": formData.numeroFranceTravail,
              "Niveau de diplômes": niveauDiplomeMap[formData.niveauDiplome] || formData.niveauDiplome,
              "Comment avez-vous connu Start-Zup ?": commentConnuMap[formData.commentConnu] || formData.commentConnu,
              "Compétences informatiques": competencesInformatiquesMap[formData.competencesInformatiques] || formData.competencesInformatiques,
              "Observations": formData.langagesInformatiques,
            },
          },
        ],
      };

      const res = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorJson: any = await res.json().catch(() => ({}));
        const errorMessage = errorJson?.error?.message || "Erreur lors de l'envoi du formulaire";
        
        // Si c'est une erreur de champ inconnu, afficher plus de détails
        if (errorJson?.error?.type === "UNKNOWN_FIELD_NAME") {
          throw new Error(`Champ inconnu dans Airtable: ${errorMessage}. Vérifiez que le nom du champ correspond exactement.`);
        }
        
        throw new Error(errorMessage);
      }

      setSubmitSuccess("Votre inscription a été enregistrée avec succès !");
      
      // Fermer la modal et réinitialiser après 2 secondes
      setTimeout(() => {
        setIsInscriptionModalOpen(false);
        setFormData({
          nom: "",
          prenom: "",
          dateNaissance: "",
          adresse: "",
          ville: "",
          codePostal: "",
          formation: "",
          situationProfessionnelle: "",
          numeroFranceTravail: "",
          niveauDiplome: "",
          commentConnu: "",
          competencesInformatiques: "",
          langagesInformatiques: "",
          cv: null,
        });
        setSubmitSuccess(null);
      }, 2000);
    } catch (error: any) {
      setSubmitError(error.message || "Une erreur est survenue lors de l'envoi du formulaire.");
    } finally {
      setSubmitting(false);
    }
  };

  const advantages = [
    {
      icon: Target,
      title: "FORMEZ VOUS À LA TECH ET L'IA",
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
    { name: "Paris Code", tagline: "Partenariat", image: parisCodeLogo },
    { name: "Ville de Paris", tagline: "Partenariat territorial", image: parisLogo },
    { name: "Le Perqo", tagline: "Partenariat", image: perqoLogo },
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
                    <CardTitle className="font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px]" style={{ minHeight: 'auto', textAlign: 'center', letterSpacing: '0', wordSpacing: '-0.1em', fontFamily: 'monospace' }}>
                      {italicizeLastWord(advantage.title)}
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

        {/* Deux nouvelles cartes */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 mt-8 sm:mt-12">
          <div className="border border-border/50 rounded-lg p-4 sm:p-6 shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer hover-tilt-outline flex flex-col aspect-[4/3] relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
            <div className="absolute inset-0 bg-white/80 z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="font-bold mb-3 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px]" style={{ textAlign: 'center', letterSpacing: '0', wordSpacing: '-0.1em', fontFamily: 'monospace' }}>{italicizeLastWord("FORMEZ VOS COLLABORATEURS À L'IA")}</h4>
              <p className="mb-0 text-black text-justify"></p>
              <div className="mt-16 text-center">
                <Button asChild variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white transition-colors">
                  <a href="/formation">Découvrir</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Carte IBM - Temporairement à la place de LE BOARD */}
          <div className="border border-border/50 rounded-lg p-4 sm:p-6 shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer hover-tilt-outline flex flex-col aspect-[4/3] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(320 100% 95%), hsl(280 100% 92%), hsl(60 100% 90%), hsl(30 100% 88%))' }}>
            <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
              <p className="text-xs font-semibold text-black uppercase tracking-wide mb-2">
                Des parcours certifiants 100% en ligne.
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
                Formez-vous gratuitement<br />
                avec IBM Skills Build
              </h3>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-start justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-black font-medium">
                    <span className="font-bold">Hardskills</span> : Les essentiels de la Tech
                  </p>
                </div>
                <div className="flex items-start justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-black font-medium">
                    <span className="font-bold">Soft skills</span> : Compétences professionnelles et savoir être
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button 
                  variant="accent" 
                  size="sm" 
                  className="gradient-accent text-accent-foreground shadow-hero"
                  onClick={() => setIsInscriptionModalOpen(true)}
                >
                  Accéder à notre programme !
                </Button>
              </div>
            </div>
          </div>

          {/* Carte LE BOARD - Masquée temporairement */}
          {/*
          <div className="border border-border/50 rounded-lg p-4 sm:p-6 shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer hover-tilt-outline flex flex-col aspect-[4/3] relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
            <div className="absolute inset-0 bg-white/80 z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="font-bold mb-3 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px]" style={{ textAlign: 'center', letterSpacing: '0', wordSpacing: '-0.1em', fontFamily: 'monospace' }}>{italicizeLastWord("LE BOARD")}<br />{italicizeLastWord("START-ZUP")}</h4>
              <p className="mb-0 text-black text-justify"></p>
              <div className="mt-28 text-center">
                <Button variant="outline" size="sm" className="border-gray-400 text-gray-400 cursor-not-allowed opacity-50" disabled>
                  Découvrir
                </Button>
              </div>
            </div>
          </div>
          */}
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
                  <p className="text-sm text-gray-600 text-left mt-2">
                    Citizen days - Rencontre L'Oréal / Start-Zup - Session 2025
                  </p>
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
                  src="https://www.youtube.com/embed/HZhL77ILIBs"
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
                  Nom *
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
                <label htmlFor="prenom" className="block text-sm font-medium text-black mb-2">
                  Prénom *
                </label>
                <Input
                  id="prenom"
                  type="text"
                  required
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="dateNaissance" className="block text-sm font-medium text-black mb-2">
                Date de naissance *
              </label>
              <Input
                id="dateNaissance"
                type="date"
                required
                value={formData.dateNaissance}
                onChange={(e) => setFormData({ ...formData, dateNaissance: e.target.value })}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="adresse" className="block text-sm font-medium text-black mb-2">
                Adresse *
              </label>
              <Input
                id="adresse"
                type="text"
                required
                value={formData.adresse}
                onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                />
              </div>
              <div>
                <label htmlFor="codePostal" className="block text-sm font-medium text-black mb-2">
                  Code postal *
                </label>
                <Input
                  id="codePostal"
                  type="text"
                  required
                  value={formData.codePostal}
                  onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="formation" className="block text-sm font-medium text-black mb-2">
                Sélectionner une formation *
              </label>
              <Select
                value={formData.formation}
                onValueChange={(value) => setFormData({ ...formData, formation: value })}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez une formation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developpeur-web-no-code-ia">Développeur web, No-Code, IA et automatisations</SelectItem>
                  <SelectItem value="developpeur-web-full-stack">Développeur Web Full Stack</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="situationProfessionnelle" className="block text-sm font-medium text-black mb-2">
                Quel est votre situation professionnelle ? *
              </label>
              <Select
                value={formData.situationProfessionnelle}
                onValueChange={(value) => setFormData({ ...formData, situationProfessionnelle: value })}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez votre situation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="etudiant">Étudiant</SelectItem>
                  <SelectItem value="actif">Actif</SelectItem>
                  <SelectItem value="demandeur-emploi">Demandeur d'emploi</SelectItem>
                  <SelectItem value="entreprise">Entreprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="numeroFranceTravail" className="block text-sm font-medium text-black mb-2">
                Numéro France Travail
              </label>
              <Input
                id="numeroFranceTravail"
                type="text"
                value={formData.numeroFranceTravail}
                onChange={(e) => setFormData({ ...formData, numeroFranceTravail: e.target.value })}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="niveauDiplome" className="block text-sm font-medium text-black mb-2">
                Niveau de diplômes *
              </label>
              <Select
                value={formData.niveauDiplome}
                onValueChange={(value) => setFormData({ ...formData, niveauDiplome: value })}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez votre niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="niveau-3">Niveau 3 (CAP, BEP)</SelectItem>
                  <SelectItem value="niveau-4">Niveau 4 (Baccalauréat, BP)</SelectItem>
                  <SelectItem value="niveau-5">Niveau 5 (BTS, DUT, DEUST)</SelectItem>
                  <SelectItem value="niveau-6">Niveau 6 (BUT, Licence, Licence professionnelle, Maîtrise)</SelectItem>
                  <SelectItem value="niveau-7">Niveau 7 (Master, diplôme d'études approfondies, diplôme d'études supérieures spécialisées, diplôme d'ingénieur)</SelectItem>
                  <SelectItem value="niveau-8">Niveau 8 (Doctorat, habilitation à diriger des recherches)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="commentConnu" className="block text-sm font-medium text-black mb-2">
                Comment avez-vous connu Start-Zup ? *
              </label>
              <Select
                value={formData.commentConnu}
                onValueChange={(value) => setFormData({ ...formData, commentConnu: value })}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez une option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="internet">Internet</SelectItem>
                  <SelectItem value="reseau-personnel">Réseau personnel</SelectItem>
                  <SelectItem value="mission-locale-france-travail">Mission locale / France travail</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="competencesInformatiques" className="block text-sm font-medium text-black mb-2">
                Compétences informatiques *
              </label>
              <Select
                value={formData.competencesInformatiques}
                onValueChange={(value) => setFormData({ ...formData, competencesInformatiques: value })}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez votre niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="debutant">Débutant</SelectItem>
                  <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                  <SelectItem value="avance">Avancé</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="langagesInformatiques" className="block text-sm font-medium text-black mb-2">
                Quel langage informatique connaissez-vous ?
              </label>
              <Input
                id="langagesInformatiques"
                type="text"
                value={formData.langagesInformatiques}
                onChange={(e) => setFormData({ ...formData, langagesInformatiques: e.target.value })}
                className="w-full"
                placeholder="Ex: Python, JavaScript, Java, etc."
              />
            </div>
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-black mb-2">
                CV *
              </label>
              <Input
                id="cv"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFormData({ ...formData, cv: file });
                }}
                className="w-full"
              />
            </div>
            {submitError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800">{submitError}</p>
              </div>
            )}
            {submitSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-800">{submitSuccess}</p>
              </div>
            )}
            <div className="flex justify-end">
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="gradient-accent text-accent-foreground shadow-hero"
                disabled={submitting}
              >
                {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
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