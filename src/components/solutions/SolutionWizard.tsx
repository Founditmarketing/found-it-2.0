'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  SolutionStrategyInputSchema,
  type SolutionStrategyInput,
  type SolutionStrategyOutput,
} from '@/ai/schemas/solution-strategist';
import { getSolutionStrategy } from '@/ai/flows/solution-strategist';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Loader2,
  Wand2,
  Lightbulb,
  TrendingUp,
  CircleDollarSign,
  ArrowLeft,
  ServerCrash,
  Sparkles,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const challengesOptions = [
  { id: 'low-traffic', label: 'Low website traffic' },
  { id: 'bad-ads', label: 'Poor ad ROI' },
  { id: 'ai-search', label: 'Disappearing in AI/Google search' },
  { id: 'no-conversions', label: "Website isn't converting visitors" },
  { id: 'low-leads', label: 'Not generating enough qualified leads' },
  { id: 'social-media', label: 'Social media engagement is low' },
];

export function SolutionWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<SolutionStrategyInput>>({
    businessName: '',
    website: '',
    industry: '',
    revenue: '',
    targetAudience: '',
    challenges: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [result, setResult] = useState<SolutionStrategyOutput | null>(null);

  const validateStep = (currentStep: number) => {
    let validationSchema;
    switch (currentStep) {
        case 1:
            validationSchema = SolutionStrategyInputSchema.pick({ businessName: true, website: true, industry: true, revenue: true });
            break;
        case 2:
            validationSchema = SolutionStrategyInputSchema.pick({ targetAudience: true });
            break;
        case 3:
            validationSchema = SolutionStrategyInputSchema.pick({ challenges: true });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ''}));
    }
  };

  const handleChallengeChange = (challengeId: string) => {
    setFormData((prev) => {
      const currentChallenges = prev.challenges || [];
      const newChallenges = currentChallenges.includes(challengeId)
        ? currentChallenges.filter((c) => c !== challengeId)
        : [...currentChallenges, challengeId];
      return { ...prev, challenges: newChallenges };
    });
    if (errors.challenges) {
      setErrors(prev => ({...prev, challenges: ''}));
    }
  };
  
  const handleRevenueChange = (value: string) => {
    setFormData((prev) => ({ ...prev, revenue: value }));
    if (errors.revenue) {
      setErrors(prev => ({...prev, revenue: ''}));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) return;

    setLoading(true);
    setApiError(null);
    try {
      const validatedInput = SolutionStrategyInputSchema.parse(formData);
      const res = await getSolutionStrategy(validatedInput);
      setResult(res);
    } catch (e: any) {
      if (e.errors) {
        // Zod validation error
        const zodErrors: Record<string, string> = {};
        e.errors.forEach((err: any) => {
          zodErrors[err.path[0]] = err.message;
        });
        setErrors(zodErrors);
      } else {
        setApiError(e.message || 'An unexpected error occurred while generating your strategy.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="text-center bg-muted p-12 rounded-3xl border border-primary/20">
        <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto" />
        <h3 className="text-2xl font-bold text-foreground mt-6">Generating Your Strategy...</h3>
        <p className="text-muted-foreground mt-2">Our AI is analyzing your business using Google Gemini. This may take a moment.</p>
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
            Your Custom Marketing Strategy
          </h2>
          <div className="inline-flex items-center gap-2 text-xs text-primary/80 font-semibold bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mt-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Powered by Google Gemini</span>
          </div>
        </div>

        <div className="space-y-12">
            <div>
                <h3 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">Executive Summary</h3>
                <p className="text-muted-foreground leading-relaxed">{result.executiveSummary}</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 pb-2">Key Initiatives</h3>
                <div className="space-y-6">
                {result.keyInitiatives.map((initiative, index) => (
                    <div key={index} className="bg-muted p-6 rounded-xl border">
                        <div className="flex items-start gap-4 mb-2">
                           <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-lg shrink-0 border border-primary/20 mt-1">
                               <Lightbulb className="h-5 w-5" />
                           </div>
                           <h4 className="text-lg font-bold text-foreground pt-1">{initiative.title}</h4>
                        </div>
                        <p className="text-muted-foreground pl-12">{initiative.description}</p>
                    </div>
                ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 pb-2">Recommended Budgets</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-muted p-6 rounded-xl border">
                         <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="h-6 w-6 text-primary" />
                            <h4 className="font-bold text-foreground">Google Ads</h4>
                         </div>
                         <p className="text-3xl font-bold text-primary mb-2">{result.recommendedBudgets.googleAds.monthlyBudget}</p>
                         <p className="text-xs text-muted-foreground">{result.recommendedBudgets.googleAds.justification}</p>
                     </div>
                     <div className="bg-muted p-6 rounded-xl border">
                         <div className="flex items-center gap-3 mb-2">
                            <CircleDollarSign className="h-6 w-6 text-primary" />
                            <h4 className="font-bold text-foreground">Local Services Ads</h4>
                         </div>
                         <p className="text-3xl font-bold text-primary mb-2">{result.recommendedBudgets.localServicesAds.monthlyBudget}</p>
                         <p className="text-xs text-muted-foreground">{result.recommendedBudgets.localServicesAds.justification}</p>
                     </div>
                 </div>
            </div>
        </div>
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-3xl font-black text-foreground mb-3">
            Like This Strategy?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            This is just the beginning. Our experts can turn this AI-generated plan into a real-world revenue engine for your business.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 h-14 px-8 text-lg font-bold rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <Link href="/contact">Let&apos;s Make It Happen</Link>
          </Button>
          <div className="mt-4">
            <Button onClick={() => { setResult(null); setStep(1); setFormData({ businessName: '', website: '', industry: '', revenue: '', targetAudience: '', challenges: [] }); }} variant="link">
              Or, start over
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-3xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
      <div className="mb-8">
        <Progress value={(step / 3) * 100} className="w-full h-2" />
        <p className="text-center text-sm text-muted-foreground mt-2 font-mono">Step {step} of 3</p>
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
          <h3 className="text-2xl font-bold text-card-foreground text-center">Tell us about your business</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-muted-foreground">Business Name</Label>
              <Input id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="e.g., Acme Roofing" />
              {errors.businessName && <p className="text-red-400 text-sm mt-1">{errors.businessName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="website" className="text-muted-foreground">Website URL</Label>
              <Input id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://example.com" />
              {errors.website && <p className="text-red-400 text-sm mt-1">{errors.website}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-muted-foreground">Industry</Label>
              <Input id="industry" name="industry" value={formData.industry} onChange={handleChange} placeholder="e.g., Home Services, E-commerce, B2B SaaS" />
              {errors.industry && <p className="text-red-400 text-sm mt-1">{errors.industry}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-muted-foreground">Annual Revenue</Label>
                <Select onValueChange={handleRevenueChange} value={formData.revenue}>
                    <SelectTrigger id="revenue" className="w-full">
                        <SelectValue placeholder="Select your annual revenue" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="< $500K">&lt; $500K</SelectItem>
                        <SelectItem value="$500K - $1M">$500K - $1M</SelectItem>
                        <SelectItem value="$1M - $5M">$1M - $5M</SelectItem>
                        <SelectItem value="$5M - $10M">$5M - $10M</SelectItem>
                        <SelectItem value="$10M - $50M">$10M - $50M</SelectItem>
                        <SelectItem value="$50M+">$50M+</SelectItem>
                    </SelectContent>
                </Select>
                {errors.revenue && <p className="text-red-400 text-sm mt-1">{errors.revenue}</p>}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
          <h3 className="text-2xl font-bold text-card-foreground text-center">Who is your target audience?</h3>
          <div>
            <Label htmlFor="targetAudience" className="text-muted-foreground">Describe your ideal customer</Label>
            <Textarea id="targetAudience" name="targetAudience" value={formData.targetAudience} onChange={handleChange} rows={5} placeholder="e.g., Homeowners in the suburbs aged 35-65, with an income over $100k, who value quality and reliability." />
            {errors.targetAudience && <p className="text-red-400 text-sm mt-1">{errors.targetAudience}</p>}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
          <h3 className="text-2xl font-bold text-card-foreground text-center">What are your biggest challenges?</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {challengesOptions.map((challenge) => (
              <label key={challenge.id} htmlFor={challenge.id} className="flex items-center space-x-3 bg-muted p-4 rounded-md border border-transparent has-[:checked]:border-primary/50 has-[:checked]:bg-primary/10 transition-all cursor-pointer">
                <Checkbox
                  id={challenge.id}
                  checked={formData.challenges?.includes(challenge.label)}
                  onCheckedChange={() => handleChallengeChange(challenge.label)}
                />
                <span className="text-base text-foreground font-medium">
                  {challenge.label}
                </span>
              </label>
            ))}
          </div>
          {errors.challenges && <p className="text-red-400 text-sm mt-2">{errors.challenges}</p>}
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
            Generate Strategy
          </Button>
        )}
      </div>
    </div>
  );
}
