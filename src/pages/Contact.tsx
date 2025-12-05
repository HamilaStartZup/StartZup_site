import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

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

        // Si le champ a été créé avec l’apostrophe typographique (’), on retente automatiquement
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
                  "Nom de l’entreprise": company, // apostrophe typographique U+2019
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
          // Retry by mapping message to a more generic field often used
          const altMessageFields = ["Notes", "Remarques", "Commentaire"]; // try common alternatives
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
    } catch (err: any) {
      setSubmitError(err?.message || "Une erreur est survenue.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 lg:py-24 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-acidgrotesk text-black-no-gradient -mb-24" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
              Contactez nos experts dès aujourd'hui
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl -mb-8 sm:-mb-16 mx-auto text-center px-4">
              Un rendez-vous suffit pour comprendre vos besoins et trouver la solution adaptée.
            </p>
            
            {/* Section d'espacement comme les autres pages */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
            <div className="mt-4 sm:mt-8">
              <Button 
                asChild
                variant="accent" 
                size="lg" 
                className="gradient-accent text-accent-foreground shadow-hero w-full sm:w-auto"
              >
                <a href="#contact-form">Prendre rendez-vous en ligne</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
            
            <div id="contact-form">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Formulaire de contact</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">Nom de l'entreprise</label>
                  <Input placeholder="Votre entreprise" required className="text-black placeholder:text-gray-500" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">Nom & Prénom</label>
                  <Input placeholder="Votre nom complet" required className="text-black placeholder:text-gray-500" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">Email</label>
                  <Input type="email" placeholder="votre@email.com" required className="text-black placeholder:text-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">Téléphone</label>
                  <Input type="tel" placeholder="Votre numéro" className="text-black placeholder:text-gray-500" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">Message (optionnel)</label>
                  <Textarea placeholder="Décrivez votre besoin" className="min-h-[140px] text-black placeholder:text-gray-500" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                {submitSuccess && (
                  <p className="text-green-600 text-sm">{submitSuccess}</p>
                )}
                {submitError && (
                  <p className="text-red-600 text-sm">{submitError}</p>
                )}
                <Button type="submit" className="gradient-accent text-accent-foreground shadow-hero" disabled={submitting}>
                  {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        

       
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


