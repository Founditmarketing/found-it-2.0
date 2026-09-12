'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FeasibilityStudyInputSchema,
  type FeasibilityStudyInput,
  type FeasibilityStudyOutput,
} from '@/ai/schemas/feasibility-study';
import { conductFeasibilityStudy } from '@/ai/flows/feasibility-study';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Loader2,
  Wand2,
  ArrowLeft,
  ServerCrash,
  Sparkles,
  ShieldAlert,
  Target,
  BarChart,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function FeasibilityStudyWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FeasibilityStudyInput>>({
    businessConcept: '',
    targetMarket: '',
    uniqueSellingProposition: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [result, setResult] = useState<FeasibilityStudyOutput | null>(null);

  const validateStep = (currentStep: number) => {
    let validationSchema;
    switch (currentStep) {
      case 1:
        validationSchema = FeasibilityStudyInputSchema.pick({ businessConcept: true });
        break;
      case 2:
        validationSchema = FeasibilityStudyInputSchema.pick({ targetMarket: true });
        break;
      case 3:
        validationSchema = FeasibilityStudyInputSchema.pick({ uniqueSellingProposition: true });
        break;
      default:
        return true;
    }
  
    const validationResult = validationSchema.safeParse(formData);
    if (!validationResult.success) {
      const newErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
     if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ''}));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) return;

    setLoading(true);
    setApiError(null);
    try {
      const validatedInput = FeasibilityStudyInputSchema.parse(formData);
      const res = await conductFeasibilityStudy(validatedInput);
      setResult(res);
    } catch (e: any) {
      if (e.errors) {
        const zodErrors: Record<string, string> = {};
        e.errors.forEach((err: any) => {
          zodErrors[err.path[0]] = err.message;
        });
        setErrors(zodErrors);
      } else {
        setApiError(e.message || 'An unexpected error occurred while generating your study.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="text-center bg-muted p-12 rounded-3xl border border-primary/20">
        <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto" />
        <h3 className="text-2xl font-bold text-foreground mt-6">Conducting Feasibility Study...</h3>
        <p className="text-muted-foreground mt-2">Our AI is analyzing your concept using Google Gemini. This may take a moment.</p>
      </div>
    );
  }

  if (apiError) {
    return (
       <div className="text-center bg-red-900/20 p-12 rounded-3xl border border-destructive/50">
        <ServerCrash className="h-12 w-12 text-destructive mx-auto" />
        <h3 className="text-2xl font-bold text-white mt-6">An Error Occurred</h3>
        <p className="text-red-300 mt-2">{apiError}</p>
        <Button onClick={() => { setApiError(null); setLoading(false); }} className="mt-6" variant="destructive">
          Try Again
        </Button>
      </div>
    )
  }

  if (result) {
    return (
      <div className="bg-card border rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
        <div className="text-center mb-12">
          <Wand2 className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-black text-card-foreground">
            Your Gemini Feasibility Study
          </h2>
          <div className="inline-flex items-center gap-2 text-xs text-primary/80 font-semibold bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mt-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Powered by Google Gemini</span>
          </div>
        </div>

        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-muted p-8 rounded-2xl border">
                <div className="md:col-span-1 flex flex-col items-center">
                    <p className="text-sm uppercase font-mono tracking-widest text-muted-foreground">Feasibility Score</p>
                    <p className="text-7xl font-black text-primary">{result.feasibilityScore}</p>
                    <Progress value={result.feasibilityScore} className="h-3 w-full" />
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-foreground mb-2">Executive Summary</h3>
                    <p className="text-muted-foreground leading-relaxed">{result.executiveSummary}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary border-b border-primary/20 pb-2 flex items-center gap-3"><BarChart className="w-6 h-6"/>Market Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">{result.marketAnalysis}</p>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary border-b border-primary/20 pb-2 flex items-center gap-3"><ShieldAlert className="w-6 h-6" />Potential Challenges</h3>
                    <ul className="space-y-3">
                    {result.potentialChallenges.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1 shrink-0">&bull;</span>
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 pb-2 flex items-center gap-3"><Target className="w-6 h-6" />Strategic Recommendations</h3>
                 <div className="space-y-4">
                    {result.strategicRecommendations.map((item, index) => (
                         <div key={index} className="flex items-start gap-4 bg-muted/50 p-4 rounded-xl border">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-lg shrink-0 border border-primary/20">{index+1}</div>
                            <p className="text-muted-foreground pt-1">{item}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-3xl font-black text-foreground mb-3">
            Ready to Take the Next Step?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            This AI-powered study is just the first step. Our human experts are ready to turn this strategy into a revenue-generating reality.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 h-14 px-8 text-lg font-bold rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
          <div className="mt-4">
            <Button onClick={() => { setResult(null); setStep(1); setFormData({businessConcept: '', targetMarket: '', uniqueSellingProposition: ''}) }} variant="link">
              Or, run another study
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-3xl p-8 backdrop-blur-sm max-w-3xl mx-auto">
      <div className="mb-8">
        <Progress value={(step / 3) * 100} className="w-full h-2" />
        <p className="text-center text-sm text-muted-foreground mt-2 font-mono">Step {step} of 3</p>
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
          <h3 className="text-2xl font-bold text-card-foreground text-center">What&apos;s the Business Concept?</h3>
          <div>
            <Label htmlFor="businessConcept" className="text-muted-foreground">Describe your core idea, what you&apos;re selling, and to whom.</Label>
            <Textarea id="businessConcept" name="businessConcept" value={formData.businessConcept} onChange={handleChange} rows={6} placeholder="e.g., A subscription box service for rare, indoor plants targeted at millennial apartment dwellers." className="mt-2 text-base" />
            {errors.businessConcept && <p className="text-red-400 text-sm mt-2">{errors.businessConcept}</p>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
          <h3 className="text-2xl font-bold text-card-foreground text-center">Who is the Target Market?</h3>
           <div>
            <Label htmlFor="targetMarket" className="text-muted-foreground">Be specific. Who are you selling to? What are their demographics and psychographics?</Label>
            <Textarea id="targetMarket" name="targetMarket" value={formData.targetMarket} onChange={handleChange} rows={6} placeholder="e.g., Urban professionals, aged 25-40, who are passionate about home decor and wellness, and are active on Instagram and Pinterest." className="mt-2 text-base" />
            {errors.targetMarket && <p className="text-red-400 text-sm mt-2">{errors.targetMarket}</p>}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
          <h3 className="text-2xl font-bold text-card-foreground text-center">What&apos;s Your Unique Selling Proposition?</h3>
          <div>
            <Label htmlFor="uniqueSellingProposition" className="text-muted-foreground">What makes you different? Why would a customer choose you over a competitor?</Label>
            <Textarea id="uniqueSellingProposition" name="uniqueSellingProposition" value={formData.uniqueSellingProposition} onChange={handleChange} rows={6} placeholder="e.g., We source plants from exclusive international nurseries, provide expert-led care guides, and use 100% sustainable packaging." className="mt-2 text-base" />
            {errors.uniqueSellingProposition && <p className="text-red-400 text-sm mt-2">{errors.uniqueSellingProposition}</p>}
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between items-center">
        {step > 1 ? (
          <Button variant="ghost" onClick={handleBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        ) : <div></div>}

        {step < 3 && (
          <Button onClick={handleNext} className="bg-primary text-primary-foreground font-bold">Next</Button>
        )}

        {step === 3 && (
          <Button onClick={handleSubmit} className="bg-primary text-primary-foreground font-bold">
            <Wand2 className="w-4 h-4 mr-2" />
            Run Study
          </Button>
        )}
      </div>
    </div>
  );
}
