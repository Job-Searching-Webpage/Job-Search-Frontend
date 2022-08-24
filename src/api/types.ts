export interface Job {
  id: number;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  location: string;
  minimumQualifications: string[];
  preferredQualifications: string[];
  description: string[];
  dateAdded: string;
}

export interface Degree {
  id: number;
  degree: string;
}

export interface Team {
  CF: string;
  id: number;
  name: string;
  cognome: string;
  dataNascita: Date;
  birthplace: string;
  nazionalita: string;
  address: string;
  jobType: string;
  disponibilita: string;
  phone: string;
  email: string;
  languages: string[];
  patenta: string;
  macchina: boolean;
  qualification: string;
  esperienze: experience[];
  backUpPerson: BackUpPerson;
}

export interface experience {
  azienda: string;
  periodo: string;
  duties: string;
  luogo: string;
  payment: string;
}

export interface BackUpPerson {
  name: string;
  cognome: string;
  email: string;
  phone: string;
}
