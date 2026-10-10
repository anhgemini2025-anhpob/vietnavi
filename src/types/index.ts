export type Language = 'vi' | 'en';

export interface CountryApp {
  id: string;
  code: string;
  countryNameVi: string;
  countryNameEn: string;
  flag: string;
  nativeTitle: string;
  nativeSubtitle: string;
  subtitleVi: string;
  subtitleEn: string;
  url: string;
  region: 'Asia' | 'Europe' | 'Americas';
  nativeTeaser: string;
  keyFeatures: {
    vi: string;
    en: string;
  }[];
  phoneticFocus: {
    vi: string;
    en: string;
  };
  samplePhrase: {
    vi: string;
    native: string;
  };
  videoThumbnail: string;
  tagColor: string;
  logo?: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

export interface ToneInfo {
  id: string;
  nameVi: string;
  nameEn: string;
  mark: string;
  color: string;
  borderColor: string;
  bgColor: string;
  descriptionVi: string;
  descriptionEn: string;
  pitchTrajectory: string;
  frequencies: number[]; // Pitch curve for synthesizer [f0, f1, f2, ...]
  sampleWord: string;
  sampleMeaningVi: string;
  sampleMeaningEn: string;
  svgPath: string; // SVG curve
}

export interface PronounItem {
  id: string;
  pronoun: string;
  roleVi: string;
  roleEn: string;
  genderVi: string;
  genderEn: string;
  ageRel: string; // Relative age to listener
  exampleUsage: string;
  culturalNoteVi: string;
  culturalNoteEn: string;
}

export interface SurvivalPhrase {
  id: string;
  category: 'food' | 'coffee' | 'shopping' | 'transport' | 'housing' | 'social';
  categoryLabelVi: string;
  categoryLabelEn: string;
  vietnamese: string;
  english: string;
  phonetic: string;
  icon: string;
  situationVi: string;
  situationEn: string;
  expatTipVi: string;
  expatTipEn: string;
  toneSequence: string[];
}

export interface ConsultationFormData {
  fullName: string;
  country: string;
  nativeLanguage: string;
  contactType: 'zalo' | 'whatsapp' | 'email';
  contactValue: string;
  currentLevel: string;
  targetGoal: string;
  locationInVietnam: string;
  notes: string;
}
