/*
 * Strategic AI-Potential Form Component
 * Design Philosophy: Organic Tech - Modern, Progressive, Trust-Building
 * Purpose: Lead qualification through 4 strategic questions + email capture
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Loader2 } from "lucide-react";

interface FormData {
  contentCreation: string;
  goals: string[];
  contentTypes: string[];
  branding: string;
  email: string;
}

interface StrategicFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const QUESTIONS = [
  {
    id: "contentCreation",
    question: "Wie wird Content aktuell in deinem Unternehmen erstellt?",
    type: "radio",
    options: [
      "Alles intern ohne AI",
      "Teilweise mit AI Tools",
      "Externe Agentur",
      "Noch nicht strukturiert"
    ]
  },
  {
    id: "goals",
    question: "Welche Ziele möchtest du mit AI-Content erreichen?",
    type: "checkbox",
    options: [
      "Mehr Sichtbarkeit",
      "Mehr Leads und Kunden",
      "Zeitersparnis",
      "Stärkeres Branding",
      "Mehrere Ziele"
    ]
  },
  {
    id: "contentTypes",
    question: "Welche Art von Content ist für dich am wichtigsten?",
    type: "checkbox",
    options: [
      "Social Media",
      "Website Inhalte",
      "SEO Blogartikel",
      "Newsletter",
      "Verkaufstexte",
      "Mehrere Bereiche"
    ]
  },
  {
    id: "branding",
    question: "Gibt es in deinem Unternehmen bereits ein klares Branding oder feste Markenrichtlinien?",
    type: "radio",
    options: [
      "Ja, vollständig",
      "Teilweise",
      "Noch nicht"
    ]
  }
];

export function StrategicForm({ isOpen, onOpenChange }: StrategicFormProps) {
  const [currentStep, setCurrentStep] = useState<"intro" | "questions" | "email" | "success">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    contentCreation: "",
    goals: [],
    contentTypes: [],
    branding: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleRadioChange = (value: string) => {
    const questionId = QUESTIONS[currentQuestion].id as keyof FormData;
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCheckboxChange = (value: string) => {
    const questionId = QUESTIONS[currentQuestion].id as keyof FormData;
    setFormData(prev => {
      const currentArray = (prev[questionId] as string[]) || [];
      const isChecked = currentArray.includes(value);
      return {
        ...prev,
        [questionId]: isChecked
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const getCurrentAnswer = () => {
    const questionId = QUESTIONS[currentQuestion].id as keyof FormData;
    return formData[questionId];
  };

  const isCurrentQuestionAnswered = () => {
    const answer = getCurrentAnswer();
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    return answer !== "";
  };

  const handleNextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep("email");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!formData.email) {
      setError("Bitte gib deine E-Mail-Adresse ein");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would send the data to your backend
      console.log("Form submitted:", formData);
      
      setCurrentStep("success");
    } catch (err) {
      setError("Es gab einen Fehler. Bitte versuche es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (currentStep === "success") {
      onOpenChange(false);
      // Reset form
      setCurrentStep("intro");
      setCurrentQuestion(0);
      setFormData({
        contentCreation: "",
        goals: [],
        contentTypes: [],
        branding: "",
        email: ""
      });
    } else {
      onOpenChange(false);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto glass-card border-primary/20">
        {/* Intro Step */}
        {currentStep === "intro" && (
          <div className="space-y-6 py-8">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-foreground">
                Dein persönliches AI-Content-Potenzial
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entdecke, wie AI deinen Content-Bereich transformieren kann. 4 kurze Fragen, dann erhältst du eine individuelle Einschätzung – völlig kostenlos.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <p className="text-sm text-muted-foreground">Strategische Fragen</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">&lt; 2 min</div>
                  <p className="text-sm text-muted-foreground">Dauer</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full text-lg py-6 rounded-full"
              onClick={() => setCurrentStep("questions")}
            >
              Jetzt starten
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Questions Step */}
        {currentStep === "questions" && (
          <div className="space-y-6 py-8">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  Frage {currentQuestion + 1} von {QUESTIONS.length}
                </span>
                <span className="text-primary font-semibold">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                {QUESTIONS[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {QUESTIONS[currentQuestion].type === "radio" ? (
                  // Radio Buttons
                  QUESTIONS[currentQuestion].options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:border-primary/50 hover:bg-primary/5 group"
                    >
                      <input
                        type="radio"
                        name={QUESTIONS[currentQuestion].id}
                        value={option}
                        checked={getCurrentAnswer() === option}
                        onChange={(e) => handleRadioChange(e.target.value)}
                        className="w-5 h-5 text-primary cursor-pointer"
                      />
                      <span className="ml-4 text-foreground font-medium group-hover:text-primary transition-colors">
                        {option}
                      </span>
                    </label>
                  ))
                ) : (
                  // Checkboxes
                  QUESTIONS[currentQuestion].options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:border-primary/50 hover:bg-primary/5 group"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={(getCurrentAnswer() as string[]).includes(option)}
                        onChange={(e) => handleCheckboxChange(e.target.value)}
                        className="w-5 h-5 text-primary cursor-pointer rounded"
                      />
                      <span className="ml-4 text-foreground font-medium group-hover:text-primary transition-colors">
                        {option}
                      </span>
                    </label>
                  ))
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {currentQuestion > 0 && (
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 rounded-full"
                  onClick={handlePreviousQuestion}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Zurück
                </Button>
              )}
              <Button
                size="lg"
                className="flex-1 rounded-full"
                disabled={!isCurrentQuestionAnswered()}
                onClick={handleNextQuestion}
              >
                {currentQuestion === QUESTIONS.length - 1 ? "Weiter zur E-Mail" : "Weiter"}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Email Step */}
        {currentStep === "email" && (
          <form onSubmit={handleSubmit} className="space-y-6 py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Abschließend: Deine E-Mail-Adresse
              </h3>
              <p className="text-muted-foreground">
                Ich melde mich persönlich mit einer individuellen Einschätzung und konkreten Empfehlungen – basierend auf deinen Antworten.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Deine E-Mail-Adresse
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="deine@email.de"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="h-12 text-base rounded-xl"
                required
              />
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1 rounded-full"
                onClick={handlePreviousQuestion}
                disabled={isSubmitting}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Zurück
              </Button>
              <Button
                type="submit"
                size="lg"
                className="flex-1 rounded-full"
                disabled={isSubmitting || !formData.email}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Wird analysiert...
                  </>
                ) : (
                  <>
                    Persönliche Empfehlung erhalten
                    <Sparkles className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        )}

        {/* Success Step */}
        {currentStep === "success" && (
          <div className="space-y-6 py-12 text-center">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Danke! Deine Analyse ist unterwegs.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ich habe deine Antworten erhalten und werde dir innerhalb von 24 Stunden eine personalisierte Einschätzung mit konkreten Empfehlungen schicken. Bis dahin: Viel Erfolg mit deinem Content!
              </p>
            </div>

            <Button
              size="lg"
              className="w-full rounded-full"
              onClick={handleClose}
            >
              Schließen
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
