import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useReveal } from "@/hooks/useReveal";
import { MapPin, Building2, ArrowRight, Users, Target } from "lucide-react";
import { FormEvent, useState, useEffect } from "react";

const CampusPartenaire = () => {
  useReveal();
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form state
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Captcha state
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaNum1(num1);
    setCaptchaNum2(num2);
    setCaptchaAnswer("");
    setCaptchaError(null);
  };
  
  // Generate captcha when modal opens
  useEffect(() => {
    if (isModalOpen) {
      generateCaptcha();
    }
  }, [isModalOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);
    setCaptchaError(null);
    
    // Validate captcha
    const correctAnswer = captchaNum1 + captchaNum2;
    if (parseInt(captchaAnswer) !== correctAnswer) {
      setCaptchaError("La réponse au calcul est incorrecte. Veuillez réessayer.");
      setSubmitting(false);
      generateCaptcha();
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY as string | undefined;
      if (!apiKey) {
        throw new Error("Clé API Airtable manquante (VITE_AIRTABLE_API_KEY)");
      }

      const baseId = "app72hBhqYdnVpWS0";
      const tableIdOrName = "tbl4jiupKgTzs0btr";
      const url = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`;

      const commonHeaders = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      } as const;

      const straightPayload = {
        records: [
          {
            fields: {
              "Nom de l'entreprise": company,
              "Nom & Prénom": fullName,
              Email: email,
              Téléphone: phone,
              "Message (optionnel)": message,
            },
          },
        ],
      };

      let res = await fetch(url, {
        method: "POST",
        headers: commonHeaders,
        body: JSON.stringify(straightPayload),
      });

      if (!res.ok) {
        let errorJson: any = undefined;
        try { errorJson = await res.json(); } catch {}

        const isUnknownField = errorJson?.error?.type === "UNKNOWN_FIELD_NAME";
        const mentionsCompanyField =
          typeof errorJson?.error?.message === "string" &&
          errorJson.error.message.includes("Nom de l'entreprise");
        const mentionsMessageField =
          typeof errorJson?.error?.message === "string" &&
          (errorJson.error.message.includes("Message (optionnel)") || errorJson.error.message.includes("Message"));

        if (res.status === 422 && isUnknownField && mentionsCompanyField) {
          const curlyPayload = {
            records: [
              {
                fields: {
                  "Nom de l'entreprise": company,
                  "Nom & Prénom": fullName,
                  Email: email,
                  Téléphone: phone,
                  "Message (optionnel)": message,
                },
              },
            ],
          };

          res = await fetch(url, {
            method: "POST",
            headers: commonHeaders,
            body: JSON.stringify(curlyPayload),
          });

          if (!res.ok) {
            let retryErr: any = undefined;
            try { retryErr = await res.json(); } catch {}
            throw new Error(retryErr?.error?.message || "Erreur lors de l'envoi (curly)");
          }
        } else if (res.status === 422 && isUnknownField && mentionsMessageField) {
          const altMessageFields = ["Notes", "Remarques", "Commentaire"];
          let lastErr: any = null;
          for (const msgField of altMessageFields) {
            const altPayload = {
              records: [
                {
                  fields: {
                    "Nom de l'entreprise": company,
                    "Nom & Prénom": fullName,
                    Email: email,
                    Téléphone: phone,
                    [msgField]: message,
                  },
                },
              ],
            } as any;
            const altRes = await fetch(url, {
              method: "POST",
              headers: commonHeaders,
              body: JSON.stringify(altPayload),
            });
            if (altRes.ok) {
              res = altRes;
              break;
            } else {
              try { lastErr = await altRes.json(); } catch { lastErr = null; }
            }
          }
          if (!res.ok) {
            throw new Error(lastErr?.error?.message || "Erreur lors de l'envoi (message alt)");
          }
        } else {
          throw new Error(errorJson?.error?.message || "Erreur lors de l'envoi");
        }
      }

      setSubmitSuccess("Votre demande a bien été envoyée. Nous vous recontacterons rapidement.");
      setCompany("");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCaptchaAnswer("");
      generateCaptcha();
      
      // Close modal after 2 seconds on success
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(null);
      }, 2000);
    } catch (err: any) {
      setSubmitError(err?.message || "Une erreur est survenue.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative flex items-center justify-center -mb-4">
              <h1 className="title-acidgrotesk text-black-no-gradient -mb-24 text-3xl sm:text-4xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
                Campus partenaire
              </h1>
            </div>
            
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 text-center">
              Devenez partenaire de START-ZUP dans votre ville
            </p>
            
            {/* Section d'espacement */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-20 bg-white reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-black leading-relaxed text-justify">
                Start-Zup poursuit son développement dans plusieurs territoires afin de renforcer sa proximité avec les entreprises et les écosystèmes locaux.
              </p>
            </div>
          </div>
        </section>

        {/* Implantations actuelles */}
        <section className="py-16 lg:py-20 bg-slate-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              Nos implantations actuelles
            </h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-base md:text-lg text-black leading-relaxed text-justify mb-8">
                Aujourd'hui, notre programme est implanté dans trois zones : <strong>Mantes-la-Jolie (78)</strong>, <strong>Trappes (78)</strong> et <strong>Paris 19 ème (75)</strong>. Ces implantations nous permettent de former des talents au plus près des besoins économiques et de créer des passerelles directes entre les apprenants et les entreprises locales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent" style={{ 
                background: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, hsl(350 86% 64%), hsl(18 95% 58%))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '';
              }}>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-white transition-colors">Mantes-la-Jolie</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors mb-1">78</p>
                  <p className="text-lg font-semibold text-gray-700 group-hover:text-white/90 transition-colors">Campus Paul Cézanne</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent" style={{ 
                background: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, hsl(350 86% 64%), hsl(18 95% 58%))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '';
              }}>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-4 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-white transition-colors">Trappes</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors mb-1">78</p>
                  <p className="text-lg font-semibold text-gray-700 group-hover:text-white/90 transition-colors">Centre Les Merisiers</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent" style={{ 
                background: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, hsl(350 86% 64%), hsl(18 95% 58%))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '';
              }}>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-green-600 mx-auto mb-4 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-white transition-colors">Paris 19 ème</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors mb-1">75</p>
                  <p className="text-lg font-semibold text-gray-700 group-hover:text-white/90 transition-colors">Le Cargo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projets 2026 */}
        <section className="py-16 lg:py-20 bg-white reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-4">En 2026, plus de talents chez Start-Zup</h2>
                      <p className="text-black leading-relaxed mb-4">
                        Afin d'élargir sa capacité d'accueil, d'augmenter son vivier de talents et de répondre à la demande croissante de partenaires souhaitant collaborer avec nous.
                      </p>
                      <p className="text-black leading-relaxed font-semibold">
                        Notre ambition : offrir des solutions concrètes aux entreprises tout en structurant un réseau territorial solide et cohérent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 lg:py-20 bg-slate-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-lg bg-white">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start space-x-4">
                    <ArrowRight className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-4">Implantez Start-Zup sur votre territoire</h2>
                      <p className="text-lg md:text-xl text-black leading-relaxed">
                        Vous souhaitez accueillir Start-Zup dans votre ville ou votre tiers-lieu ? Contactez-nous pour étudier ensemble l'ouverture d'un site, la mise en place d'un partenariat ou l'intégration de nos solutions sur votre territoire.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 lg:py-20 bg-white text-center reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              Prêts à avancer ensemble ?
            </h2>
            <Button 
              variant="accent" 
              size="lg" 
              className="gradient-accent text-accent-foreground shadow-hero"
              onClick={() => setIsModalOpen(true)}
            >
              Contactez-nous !
            </Button>
          </div>
        </section>

        {/* Contact Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-black">Formulaire de contact</DialogTitle>
              <DialogDescription className="text-black">
                Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Nom de votre organisation</label>
                <Input placeholder="Votre organisation" required className="text-black placeholder:text-gray-500" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Nom & Prénom <span className="text-red-500">*</span></label>
                <Input placeholder="Votre nom complet" required className="text-black placeholder:text-gray-500" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Email <span className="text-red-500">*</span></label>
                <Input type="email" placeholder="votre@email.com" required className="text-black placeholder:text-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Téléphone <span className="text-red-500">*</span></label>
                <Input type="tel" placeholder="Votre numéro" required className="text-black placeholder:text-gray-500" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Message (optionnel)</label>
                <Textarea placeholder="Décrivez votre besoin" className="min-h-[140px] text-black placeholder:text-gray-500" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              
              {/* Captcha */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="block mb-2 text-sm font-medium text-black">
                  Vérification de sécurité <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded border border-gray-300">
                    <span className="text-lg font-bold text-black">{captchaNum1}</span>
                    <span className="text-black">+</span>
                    <span className="text-lg font-bold text-black">{captchaNum2}</span>
                    <span className="text-black">=</span>
                  </div>
                  <Input
                    type="number"
                    placeholder="?"
                    required
                    className="w-24 text-black placeholder:text-gray-500"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Nouveau calcul
                  </button>
                </div>
                {captchaError && (
                  <p className="text-red-600 text-sm mt-2">{captchaError}</p>
                )}
              </div>
              
              {submitSuccess && (
                <p className="text-green-600 text-sm">{submitSuccess}</p>
              )}
              {submitError && (
                <p className="text-red-600 text-sm">{submitError}</p>
              )}
              <Button type="submit" className="gradient-accent text-accent-foreground shadow-hero w-full" disabled={submitting}>
                {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default CampusPartenaire;

