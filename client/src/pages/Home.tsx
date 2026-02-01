/*
 * Design Philosophy: Organic Tech – Flüssige Formen trifft Präzision
 * Warme, einladende Landingpage mit flüssigen Gradients, Glassmorphism und organischen Formen
 * Farbpalette: Orange (#FF4500), Deep Navy, Muted Purple, Soft Anthracite, Offwhite
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { 
  Sparkles, 
  Target, 
  Zap, 
  Building2, 
  Briefcase, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Palette,
  TrendingUp,
  Shield
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-gradient.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card animate-fade-in-up">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Spezialisiert auf authentischen AI-Content für Unternehmen
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in-up animation-delay-200">
              AI-Content, der deine{" "}
              <span className="gradient-text">Marke stärkt</span>
              {" "}– nicht verwässert
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Professioneller Content mit AI erstellen. Mit Branding, Persönlichkeit und Authentizität, 
              die dein Unternehmen einzigartig macht.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full glass-card hover:bg-primary/10 transition-all duration-300"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Lerne mich kennen
              </h2>
              <p className="text-lg text-muted-foreground">
                Erfahre, wie AI deinen Content-Bereich transformieren kann
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="relative rounded-3xl overflow-hidden glass-card aspect-video group cursor-pointer hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                <p className="text-white font-medium">Video: Dein persönliches Intro oder AI-Agent-Demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Die Herausforderung mit AI-Content
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Standard-AI-Tools liefern generische Ergebnisse – deine Marke verdient mehr
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-destructive/20">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Generisch & Austauschbar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Standard-AI-Content klingt wie von der Stange und verwässert deine Marke
              </p>
            </Card>

            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-destructive/20">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <span className="text-3xl">😐</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Keine Persönlichkeit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Authentizität und Markenstimme gehen verloren
              </p>
            </Card>

            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-destructive/20">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Fehlende Strategie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ohne klares Konzept verpufft die Wirkung
              </p>
            </Card>
          </div>

          {/* Solution Statement */}
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl glass-card border-2 border-primary/20">
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              Deshalb setze ich auf{" "}
              <span className="gradient-text font-bold">strategischen AI-Einsatz mit Branding-Fokus</span>
              {" "}– für Content, der deine Marke stärkt, nicht verwässert.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              So erstelle ich AI-Content für dein Unternehmen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategisch, authentisch und auf deine Marke zugeschnitten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div 
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/ai-branding-visual.png)' }}
              ></div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Branding-First AI-Content</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deine Markenstimme, Tonalität und Persönlichkeit bleiben erhalten – AI verstärkt sie nur
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Brand Voice Analyse</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Custom AI-Prompting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Authentizitäts-Check</span>
                </li>
              </ul>
            </Card>

            {/* Service 2 */}
            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div 
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/content-strategy-visual.png)' }}
              ></div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Strategischer Content-Aufbau</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Von der Content-Strategie bis zur Umsetzung – alles aus einer Hand
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Content-Audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Strategieentwicklung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Redaktionsplanung</span>
                </li>
              </ul>
            </Card>

            {/* Service 3 */}
            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div 
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/authentic-content-visual.png)' }}
              ></div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Professionelle Umsetzung</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hochwertige Texte, Visuals und Videos – optimiert für deine Kanäle
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Multi-Format Content</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">SEO & GEO-Optimierung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">AI-Suche Ready</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Warum mit mir arbeiten?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise, die den Unterschied macht
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Branding-Expertise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ich verstehe Markenführung – AI ist nur das Werkzeug
              </p>
            </Card>

            <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Kein Copy-Paste</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jeder Content wird individuell auf dein Unternehmen angepasst
              </p>
            </Card>

            <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Strategischer Ansatz</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Von der Analyse bis zur Umsetzung – durchdacht und zielgerichtet
              </p>
            </Card>

            <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Messbare Ergebnisse</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Content, der wirkt – nicht nur gut aussieht
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              So läuft die Zusammenarbeit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent, strukturiert und auf deine Ziele ausgerichtet
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: "01",
                title: "Kennenlernen & Analyse",
                description: "Kostenloses Erstgespräch und Analyse deiner Marke und Ziele"
              },
              {
                number: "02",
                title: "Strategie & Konzept",
                description: "Content-Strategie entwickeln und Branding-Guidelines definieren"
              },
              {
                number: "03",
                title: "Umsetzung",
                description: "AI-gestützte Content-Erstellung mit Qualitätssicherung & Feinschliff"
              },
              {
                number: "04",
                title: "Optimierung",
                description: "Performance-Tracking und kontinuierliche Verbesserung"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Perfekt für
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unternehmen und Selbstständige, die ihren Content-Bereich professionalisieren wollen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-10 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Unternehmen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die ihren Content-Bereich professionalisieren wollen
              </p>
            </Card>

            <Card className="p-10 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Selbstständige</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die mit AI effizienter arbeiten möchten
              </p>
            </Card>

            <Card className="p-10 glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Marketing-Teams</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die ihre Content-Produktion skalieren wollen
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/cta-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Bereit für AI-Content, der deine{" "}
              <span className="gradient-text">Marke stärkt</span>?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lass uns in einem kostenlosen Erstgespräch herausfinden, wie AI deinen 
              Content-Bereich transformieren kann.
            </p>
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Jetzt Erstgespräch buchen
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">Oder kontaktiere mich direkt:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a href="mailto:kontakt@co-pa.ai" className="text-primary hover:underline">
                  kontakt@co-pa.ai
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a href="#" className="text-primary hover:underline">
                  LinkedIn Profil
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2026 AI-Content mit Branding-Fokus. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 justify-center text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
