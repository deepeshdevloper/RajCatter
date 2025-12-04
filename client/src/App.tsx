import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BookingChatbot from "@/components/features/BookingChatbot";
import LanguageSwitcher from "@/components/features/LanguageSwitcher";
import Intro from "@/components/features/Intro";
import NotFound from "@/pages/not-found";
import "./locales/i18n"; // Import i18n config

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Menu from "@/pages/Menu";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Tasting from "@/pages/Tasting";
import PortalAuth from "@/pages/PortalAuth";
import PortalDashboard from "@/pages/PortalDashboard";
import DigitalMenuFlipbook from "@/pages/DigitalMenuFlipbook";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/menu" component={Menu} />
        <Route path="/menu/flipbook" component={DigitalMenuFlipbook} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/tasting" component={Tasting} />
        <Route path="/portal" component={PortalAuth} />
        <Route path="/portal/dashboard" component={PortalDashboard} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      
      <Toaster />
      <LanguageSwitcher />
      <Router />
      <WhatsAppButton />
      <BookingChatbot />
    </QueryClientProvider>
  );
}

export default App;