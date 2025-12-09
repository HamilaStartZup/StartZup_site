import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

const MentionsLegales = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal" style={{ opacity: 1 }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-acidgrotesk text-black-no-gradient -mb-6" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)', color: '#000000' }}>
              RGPD / Mentions légales
            </h1>
            
            {/* Section d'espacement */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-12 lg:py-16 bg-white reveal-left" style={{ opacity: 1 }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ color: '#000000' }}>
            <div className="max-w-4xl mx-auto space-y-8 text-justify" style={{ color: '#000000' }}>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black" style={{ color: '#000000' }}>Définitions</h2>
                <div className="space-y-3">
                  <p className="text-black" style={{ color: '#000000' }}><strong>Client</strong> : tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.</p>
                  
                  <p className="text-black" style={{ color: '#000000' }}><strong>Prestations et Services</strong> : https://www.start-zup.com met à disposition des Clients :</p>
                  
                  <p className="text-black" style={{ color: '#000000' }}><strong>Contenu</strong> : Ensemble des éléments constituants l'information présente sur le Site, notamment textes – images – vidéos.</p>
                  
                  <p className="text-black" style={{ color: '#000000' }}><strong>Informations clients</strong> : Ci après dénommé « Information (s) » qui correspondent à l'ensemble des données personnelles susceptibles d'être détenues par https://www.start-zup.com pour la gestion de votre compte, de la gestion de la relation client et à des fins d'analyses et de statistiques.</p>
                  
                  <p className="text-black" style={{ color: '#000000' }}><strong>Utilisateur</strong> : Internaute se connectant, utilisant le site susnommé.</p>
                  
                  <p className="text-black" style={{ color: '#000000' }}><strong>Informations personnelles</strong> : « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
                  
                  <p className="text-black" style={{ color: '#000000' }}>Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">1. Présentation du site internet.</h2>
                <p className="text-black mb-4">
                  En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://www.start-zup.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
                </p>
                <div className="space-y-2">
                  <p className="text-black"><strong>Propriétaire</strong> : Association déclarée Start-Zup Capital social de 0€ Numéro de TVA: FR29921282661 – 7 rue paul gaugin 78200 Mantes-la-Jolie</p>
                  
                  <p className="text-black"><strong>Responsable publication</strong> : WHPC SAS – contact@whpc-llc.com</p>
                  <p className="text-sm text-gray-600">Le responsable publication est une personne physique ou une personne morale.</p>
                  
                  <p className="text-black"><strong>Webmaster</strong> : WHPC SAS – contact@whpc-llc.com</p>
                  
                  <p className="text-black"><strong>Hébergeur</strong> : OVH SAS – 2 rue Kellermann 59100 Roubaix 09 72 10 10 10</p>
                  
                  <p className="text-black"><strong>Délégué à la protection des données</strong> : WHPC – contact@whpc-llc.com</p>
                  
                  <p className="text-sm text-gray-600 mt-4">Ces mentions légales RGPD sont issues du générateur de mentions légales RGPD créé par l'agence web Evico</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">2. Conditions générales d'utilisation du site et des services proposés.</h2>
                <div className="space-y-3">
                  <p className="text-black">Le Site constitue une œuvre de l'esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables.</p>
                  
                  <p className="text-black">Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>
                  
                  <p className="text-black">L'utilisation du site https://www.start-zup.com implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site https://www.start-zup.com sont donc invités à les consulter de manière régulière.</p>
                  
                  <p className="text-black">Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par https://www.start-zup.com, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.</p>
                  
                  <p className="text-black">Le site web https://www.start-zup.com est mis à jour régulièrement par https://www.start-zup.com responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le plus souvent possible afin d'en prendre connaissance.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">3. Description des services fournis.</h2>
                <div className="space-y-3">
                  <p className="text-black">Le site internet https://www.start-zup.com a pour objet de fournir une information concernant l'ensemble des activités de la société.</p>
                  
                  <p className="text-black">https://www.start-zup.com s'efforce de fournir sur le site https://www.start-zup.com des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                  
                  <p className="text-black">Toutes les informations indiquées sur le site https://www.start-zup.com sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site https://www.start-zup.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">4. Limitations contractuelles sur les données techniques.</h2>
                <div className="space-y-3">
                  <p className="text-black">Le site utilise la technologie JavaScript.</p>
                  
                  <p className="text-black">Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>
                  
                  <p className="text-black">Le site https://www.start-zup.com est hébergé chez un prestataire sur le territoire de l'Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
                  
                  <p className="text-black">L'objectif est d'apporter une prestation qui assure le meilleur taux d'accessibilité. L'hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l'année. Il se réserve néanmoins la possibilité d'interrompre le service d'hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d'amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>
                  
                  <p className="text-black">https://www.start-zup.com et l'hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l'encombrement du réseau empêchant l'accès au serveur.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">5. Propriété intellectuelle et contrefaçons.</h2>
                <div className="space-y-3">
                  <p className="text-black">https://www.start-zup.com est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.</p>
                  
                  <p className="text-black">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : https://www.start-zup.com.</p>
                  
                  <p className="text-black">Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">6. Limitations de responsabilité.</h2>
                <div className="space-y-3">
                  <p className="text-black">https://www.start-zup.com agit en tant qu'éditeur du site. https://www.start-zup.com est responsable de la qualité et de la véracité du Contenu qu'il publie.</p>
                  
                  <p className="text-black">https://www.start-zup.com ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site internet https://www.start-zup.com, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.</p>
                  
                  <p className="text-black">https://www.start-zup.com ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site https://www.start-zup.com.</p>
                  
                  <p className="text-black">Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition des utilisateurs. https://www.start-zup.com se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, https://www.start-zup.com se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l'utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">7. Gestion des données personnelles.</h2>
                <p className="text-black mb-4">
                  Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l'Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">7.1 Responsables de la collecte des données personnelles</h3>
                    <div className="space-y-3">
                      <p className="text-black">Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l'Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Start-Zup. https://www.start-zup.comest représenté par BENATALLAH Chawki, son représentant légal</p>
                      
                      <p className="text-black">En tant que responsable du traitement des données qu'il collecte, https://www.start-zup.com s'engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d'établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité.</p>
                      
                      <p className="text-black">Chaque fois que https://www.start-zup.com traite des Données Personnelles, https://www.start-zup.com prend toutes les mesures raisonnables pour s'assurer de l'exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles https://www.start-zup.com les traite.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">7.2 Finalité des données collectées</h3>
                    <p className="text-black mb-3">https://www.start-zup.com est susceptible de traiter tout ou partie des données :</p>
                    <ul className="list-disc list-inside space-y-2 text-black ml-4">
                      <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l'utilisateur : données de connexion et d'utilisation du Site, facturation, historique des commandes, etc.</li>
                      <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l'adresse IP, le mot de passe (hashé)</li>
                      <li>pour améliorer la navigation sur le Site : données de connexion et d'utilisation</li>
                      <li>pour mener des enquêtes de satisfaction facultatives sur https://www.start-zup.com : adresse email</li>
                      <li>pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email</li>
                    </ul>
                    <p className="text-black mt-3">https://www.start-zup.com ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d'analyses.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">7.3 Droit d'accès, de rectification et d'opposition</h3>
                    <p className="text-black mb-3">Conformément à la réglementation européenne en vigueur, les Utilisateurs de https://www.start-zup.com disposent des droits suivants :</p>
                    <ul className="list-disc list-inside space-y-2 text-black ml-4">
                      <li>droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs</li>
                      <li>droit de verrouillage ou d'effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu'elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite</li>
                      <li>droit de retirer à tout moment un consentement (article 13-2c RGPD)</li>
                      <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)</li>
                      <li>droit d'opposition au traitement des données des Utilisateurs (article 21 RGPD)</li>
                      <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l'objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD)</li>
                      <li>droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui https://www.start-zup.com devra communiquer (ou non) ses données à un tiers qu'ils aura préalablement désigné</li>
                    </ul>
                    <p className="text-black mt-3">Dès que https://www.start-zup.com a connaissance du décès d'un Utilisateur et à défaut d'instructions de sa part, https://www.start-zup.com s'engage à détruire ses données, sauf si leur conservation s'avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.</p>
                    
                    <p className="text-black mt-3">Si l'Utilisateur souhaite savoir comment https://www.start-zup.com utilise ses Données Personnelles, demander à les rectifier ou s'oppose à leur traitement, l'Utilisateur peut contacter https://www.start-zup.com par écrit à l'adresse suivante :</p>
                    
                    <p className="text-black mt-3 font-semibold">Start-Zup – DPO, WHPC<br />7 rue paul gaugin 78200 Mantes-la-Jolie.</p>
                    
                    <p className="text-black mt-3">Dans ce cas, l'Utilisateur doit indiquer les Données Personnelles qu'il souhaiterait que https://www.start-zup.com corrige, mette à jour ou supprime, en s'identifiant précisément avec une copie d'une pièce d'identité (carte d'identité ou passeport).</p>
                    
                    <p className="text-black mt-3">Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à https://www.start-zup.com par la loi, notamment en matière de conservation ou d'archivage des documents. Enfin, les Utilisateurs de https://www.start-zup.com peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">7.4 Non-communication des données personnelles</h3>
                    <div className="space-y-3">
                      <p className="text-black">https://www.start-zup.com s'interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l'Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, https://www.start-zup.com reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu'il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>
                      
                      <p className="text-black">https://www.start-zup.com s'engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu'elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l'intégrité ou la confidentialité des Informations du Client est portée à la connaissance de https://www.start-zup.com, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs https://www.start-zup.com ne collecte aucune « données sensibles ».</p>
                      
                      <p className="text-black">Les Données Personnelles de l'Utilisateur peuvent être traitées par des filiales de https://www.start-zup.com et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.</p>
                      
                      <p className="text-black">Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d'avoir accès aux données des Utilisateurs de https://www.start-zup.com sont principalement les agents de notre service client.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">7.5 Types de données collectées</h3>
                    <p className="text-black mb-3">Concernant les utilisateurs d'un Site https://www.start-zup.com, nous collectons les données suivantes qui sont indispensables au fonctionnement du service , et qui seront conservées pendant une période maximale de 9 mois après la fin de la relation contractuelle:</p>
                    <p className="text-black font-semibold">Nom, Prénom, mail, Téléphone, situation professionnelle</p>
                    
                    <p className="text-black mt-4 mb-3">https://www.start-zup.com collecte en outre des informations qui permettent d'améliorer l'expérience utilisateur et de proposer des conseils contextualisés :</p>
                    <p className="text-black font-semibold">Fichiers PDF (Curriculum vitae)</p>
                    
                    <p className="text-black mt-4">Ces données sont conservées pour une période maximale de 9 mois après la fin de la relation contractuelle</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">8. Notification d'incident</h2>
                <div className="space-y-3">
                  <p className="text-black">Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue.</p>
                  
                  <p className="text-black">Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d'incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</p>
                  
                  <p className="text-black">Aucune information personnelle de l'utilisateur du site https://www.start-zup.com n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de https://www.start-zup.com et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site https://www.start-zup.com.</p>
                  
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 text-black">Sécurité</h3>
                    <p className="text-black mb-3">Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, https://www.start-zup.com utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l'encryption et mot de passe.</p>
                    
                    <p className="text-black">Lors du traitement des Données Personnelles, https://www.start-zup.comprend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">9. Liens hypertextes « cookies » et balises ("tags") internet</h2>
                <div className="space-y-3">
                  <p className="text-black">Le site https://www.start-zup.com contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de https://www.start-zup.com. Cependant, https://www.start-zup.com n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.</p>
                  
                  <p className="text-black">Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l'accessibilité à tout ou partie des Services proposés par le site.</p>
                  
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 text-black">9.1. « COOKIES »</h3>
                    <div className="space-y-3">
                      <p className="text-black">Un « cookie » est un petit fichier d'information envoyé sur le navigateur de l'Utilisateur et enregistré au sein du terminal de l'Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l'Utilisateur, le fournisseur d'accès Internet de l'Utilisateur, le système d'exploitation de l'Utilisateur, ainsi que la date et l'heure d'accès. Les Cookies ne risquent en aucun cas d'endommager le terminal de l'Utilisateur.</p>
                      
                      <p className="text-black">https://www.start-zup.com est susceptible de traiter les informations de l'Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à https://www.start-zup.com d'améliorer le contenu du Site, de la navigation de l'Utilisateur.</p>
                      
                      <p className="text-black">Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l'Utilisateur peut configurer son navigateur pour qu'il lui permette de décider s'il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu'ils soient rejetés, soit systématiquement, soit selon leur émetteur. L'Utilisateur peut également configurer son logiciel de navigation de manière à ce que l'acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu'un Cookie soit susceptible d'être enregistré dans son terminal. https://www.start-zup.com informe l'Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.</p>
                      
                      <p className="text-black">Si l'Utilisateur refuse l'enregistrement de Cookies dans son terminal ou son navigateur, ou si l'Utilisateur supprime ceux qui y sont enregistrés, l'Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque https://www.start-zup.com ou l'un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d'affichage ou le pays depuis lequel le terminal semble connecté à Internet.</p>
                      
                      <p className="text-black">Le cas échéant, https://www.start-zup.com décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par https://www.start-zup.com, résultant (i) du refus de Cookies par l'Utilisateur (ii) de l'impossibilité pour https://www.start-zup.com d'enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l'Utilisateur. Pour la gestion des Cookies et des choix de l'Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d'aide du navigateur, qui permettra de savoir de quelle manière l'Utilisateur peut modifier ses souhaits en matière de Cookies.</p>
                      
                      <p className="text-black">À tout moment, l'Utilisateur peut faire le choix d'exprimer et de modifier ses souhaits en matière de Cookies. https://www.start-zup.com pourra en outre faire appel aux services de prestataires externes pour l'aider à recueillir et traiter les informations décrites dans cette section.</p>
                      
                      <p className="text-black">Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de https://www.start-zup.com ou dans son application mobile et si l'Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l'application mobile de https://www.start-zup.com, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).</p>
                      
                      <p className="text-black">Ces types de cookies ne sont déposés sur vos terminaux qu'à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l'application mobile de https://www.start-zup.com. À tout moment, l'Utilisateur peut néanmoins revenir sur son consentement à ce que https://www.start-zup.com dépose ce type de cookies.</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 text-black">Article 9.2. BALISES ("TAGS") INTERNET</h3>
                    <div className="space-y-3">
                      <p className="text-black">https://www.start-zup.com peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d'action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l'intermédiaire d'un partenaire spécialiste d'analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l'adresse IP de l'Utilisateur) dans un pays étranger.</p>
                      
                      <p className="text-black">Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d'accéder au Site, et sur les différentes pages de celui-ci.</p>
                      
                      <p className="text-black">Cette technologie permet à https://www.start-zup.com d'évaluer les réponses des visiteurs face au Site et l'efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l'utilisation de ce Site par l'Utilisateur.</p>
                      
                      <p className="text-black">Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d'autres sites Internet grâce à ces balises, constituer des rapports sur l'activité du Site à l'attention de https://www.start-zup.com, et fournir d'autres services relatifs à l'utilisation de celui-ci et d'Internet.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">10. Droit applicable et attribution de juridiction.</h2>
                <div className="space-y-3">
                  <p className="text-black">Tout litige en relation avec l'utilisation du site https://www.start-zup.com est soumis au droit français.</p>
                  
                  <p className="text-black">En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de VERSAILLES</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;

