import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import DevamEdenProjeler from "@/pages/DevamEdenProjeler";
import TamamlananProjeler from "@/pages/TamamlananProjeler";
import Kurumsal from "@/pages/Kurumsal";
import Hakkimizda from "@/pages/Hakkimizda";
import MisyonVizyon from "@/pages/MisyonVizyon";
import YonetimKadrosu from "@/pages/YonetimKadrosu";
import Referanslar from "@/pages/Referanslar";
import Haberler from "@/pages/Haberler";
import Iletisim from "@/pages/Iletisim";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/kurumsal" component={Kurumsal} />
      <Route path="/hakkimizda" component={Hakkimizda} />
      <Route path="/misyon-vizyon" component={MisyonVizyon} />
      <Route path="/yonetim-kadrosu" component={YonetimKadrosu} />
      <Route path="/projeler" component={Projects} />
      <Route path="/projeler/devam-eden" component={DevamEdenProjeler} />
      <Route path="/projeler/tamamlanan" component={TamamlananProjeler} />
      <Route path="/projeler/:slug" component={ProjectDetail} />
      <Route path="/referanslar" component={Referanslar} />
      <Route path="/haberler" component={Haberler} />
      <Route path="/iletisim" component={Iletisim} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
