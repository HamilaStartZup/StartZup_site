import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Expertise from "./pages/Expertise";
import Formation from "./pages/Formation";
import EngagerEntreprise from "./pages/EngagerEntreprise";
import CampusPartenaire from "./pages/CampusPartenaire";
import POC from "./pages/POC";
import Board from "./pages/Board";
import Cybersecurite from "./pages/Cybersecurite";
import SupportIT from "./pages/SupportIT";
import VR3D from "./pages/VR3D";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/engager-entreprise" element={<EngagerEntreprise />} />
          <Route path="/campus-partenaire" element={<CampusPartenaire />} />
          <Route path="/poc" element={<POC />} />
          <Route path="/board" element={<Board />} />
          <Route path="/cybersecurite" element={<Cybersecurite />} />
          <Route path="/support-it" element={<SupportIT />} />
          <Route path="/vr-3d" element={<VR3D />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
