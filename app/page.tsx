/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, GitBranch, Mail, MessageSquare, Linkedin, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Translations object
const translations = {
  fr: {
    // Header section
    jobTitle: "Développeur web",
    jobTitleHighlight: ".NET React",
    tagline1: "CORRECTION",
    tagline2: "ÉVOLUTION",
    tagline3: "DÉPLOIEMENT",
    
    // Tabs
    experience: "Expérience",
    projects: "Projets",
    testimonials: "Témoignages",
    
    // Buttons
    schedule: "Prendre RDV",
    downloadCV: "Télécharger CV",
    contact: "Me contacter",
    malt: "Malt",
    linkedin: "LinkedIn",
    
    // Intro section
    introTitle: "Votre bras droit technique C#/.NET & React",
    introText: "Je vous accompagne sur la maintenance globale de vos applications, la création de fonctionnalités avec tests unitaires robustes, la modernisation d'applications legacy (refactoring .NET, React, architecture cloud) et l'optimisation SEO pour augmenter votre trafic organique.",
    successesTitle: "Réussites notables :",
    success1: "Refactorisation et migration technique de modules juridiques (C# et React)",
    success2: "Refonte SEO : +35% de trafic organique",
    success3: "Migration Cloud avec scaling horizontal",
    success4: "Architecture en micro-services : -80% de temps de chargement",
    
    // Stats
    yearsOfExperience: "Années d'Expérience",
    companiesHelped: "Entreprises accompagnées",
    refactoredProjects: "Projets Refactorisés",
    motivation: "De motivation",
    
    // Experience
    lexisNexisTitle: "LexisNexis Paris - Développeur Full Stack C#.NET et React",
    lexisNexisDate: "Nov. 2024 - Présent",
    lexisNexisDesc1: "Développement de nouvelles fonctionnalités, de tests unitaires et maintenance de l'application au sein de l'équipe IFU",
    lexisNexisDesc2: "Participation à un projet majeur de refactoring visant à réduire la dette technique, utilisant SonarQube et SonarLint pour améliorer la qualité du code (réduction de 40% de la complexité cognitive)",
    lexisNexisDesc3: "Modernisation de l'interface utilisateur en migrant de Kendo UI/Razor vers React, incluant la mise en place d'une documentation exhaustive et de bonnes pratiques de développement",
    lexisNexisDesc4: "Processus de revue de code structuré régulier et validation fonctionnelle des tickets",
    lexisNexisDesc5: "Utilisation d'IA générative",
    lexisNexisDesc6: "Responsabilités temporaires de Scrum Master",
    
    figaroTitle: "Figaro Classifieds Paris - Développeur Full Stack Go et Vue",
    figaroDate: "Avr. 2024 - Nov. 2024",
    figaroDesc1: "Développement de nouvelles fonctionnalités et de tests unitaires et d'intégration augmentant la couverture de code de 40% à 80% au sein de l'équipe Emploi",
    figaroDesc2: "Participation à la transition Vue 2 - Vue 3, et JavaScript - TypeScript",
    figaroDesc3: "Optimisation du SEO ayant conduit à une augmentation de 35% du trafic organique : implémentation d'agrégations Elasticsearch, génération automatisée de sitemaps et création de landing pages optimisées",
    figaroDesc4: "Participation aux revues de code",
    figaroDesc5: "Utilisation d'IA générative",
    figaroDesc6: "Implémentation d'une stratégie de migration CDN sur GCP, réduisant les temps de chargement des images de 60% et optimisant les coûts de stockage",
    figaroDesc7: "Gestion de la disponibilité du site - analyse des logs via Datadog et GCP",
    
    equativTitle: "Equativ Paris - Développeur Full Stack C#.NET et Angular",
    equativDate: "Oct. 2023 - Mars 2024",
    equativDesc1: "Développement de nouvelles fonctionnalités et de tests unitaires au sein de l'équipe de la R&D chargée de la gestion des rapports de données publicitaires et de la facturation",
    equativDesc2: "Participation à la migration vers GCP et à sa mise en production",
    equativDesc3: "Création et déploiement d'APIs et CI/CD via GitLab et ArgoCD",
    
    ivaluaTitle: "Ivalua Massy Palaiseau - Développeur Full Stack C#.NET et JavaScript",
    ivaluaDate: "Juin 2020 - Sept. 2023",
    ivaluaDesc1: "Développement de nouvelles fonctionnalités au sein de l'équipe de la R&D chargée du Procurement to Receipt",
    ivaluaDesc2: "Contribution à la refonte d'une application monolithique vers une architecture microservices, et d'un front Webform à React, afin de réduire le temps de chargement de l'application de 80%",
    ivaluaDesc3: "Participation à la création d'un module sur le calcul de l'empreinte carbone de la chaîne d'approvisionnement",
    ivaluaDesc4: "Optimisation de requêtes T-SQL et de procédures stockées",
    
    // Testimonials
    testimonialName: "Singdavann Srun",
    testimonialCompany: "LexisNexis - 17/02/2025",
    testimonialText: "Tanguy est un excellent profil full-stack. Bien que sa mission fût courte, il a été d'une grande aide au sein de l'équipe Poly. Son autonomie et sa motivation sont appréciables au quotidien. Tout en partageant les bonnes pratiques du dev avec les collègues, il a su s'adapter rapidement à nos différents projets complexes et à produit un travail de qualité. C'est sans hésitation que nous pourrions refaire appel à ses services.",
    
    // Projects
    collocShareTitle: "CollocShare",
    collocShareDesc: "Application permettant aux colocataires de partager leurs dépenses, de gérer les charges de travail communes et d'organiser la vie quotidienne en colocation.",
    
    // Footer
    ctaTitle: "Prêt à démarrer votre projet ?",
    ctaText: "Prenez RDV pour discuter de vos besoins",
    
    // Language
    switchLanguage: "English",
  },
  en: {
    // Header section
    jobTitle: "Web Developer",
    jobTitleHighlight: ".NET React",
    tagline1: "MAINTENANCE",
    tagline2: "INNOVATION",
    tagline3: "DEPLOYMENT",
    
    // Tabs
    experience: "Experience",
    projects: "Projects",
    testimonials: "Testimonials",
    
    // Buttons
    schedule: "Schedule a call",
    downloadCV: "Download CV",
    contact: "Contact me",
    malt: "Malt",
    linkedin: "LinkedIn",
    
    // Intro section
    introTitle: "Your C#/.NET & React Technical Partner",
    introText: "I support you with comprehensive application maintenance, creation of features with robust unit tests, modernization of legacy applications (refactoring .NET, React, cloud architecture) and SEO optimization to increase your organic traffic.",
    successesTitle: "Notable achievements:",
    success1: "Refactoring and technical migration of legal modules (C# and React)",
    success2: "SEO redesign: +35% organic traffic",
    success3: "Cloud migration with horizontal scaling",
    success4: "Microservices architecture: -80% loading time",
    
    // Stats
    yearsOfExperience: "Years of Experience",
    companiesHelped: "Companies Served",
    refactoredProjects: "Refactored Projects",
    motivation: "Motivation",
    
    // Experience
    lexisNexisTitle: "LexisNexis Paris - C#.NET & React Full Stack Developer",
    lexisNexisDate: "Nov. 2024 - Present",
    lexisNexisDesc1: "Development of new features, unit tests, and application maintenance within the IFU team",
    lexisNexisDesc2: "Participation in a major refactoring project aimed at reducing technical debt, using SonarQube and SonarLint to improve code quality (40% reduction in cognitive complexity)",
    lexisNexisDesc3: "UI modernization by migrating from Kendo UI/Razor to React, including implementation of comprehensive documentation and development best practices",
    lexisNexisDesc4: "Regular structured code review process and functional validation of tickets",
    lexisNexisDesc5: "Use of generative AI",
    lexisNexisDesc6: "Temporary Scrum Master responsibilities",
    
    figaroTitle: "Figaro Classifieds Paris - Go & Vue Full Stack Developer",
    figaroDate: "Apr. 2024 - Nov. 2024",
    figaroDesc1: "Development of new features and unit/integration tests, increasing code coverage from 40% to 80% within the Employment team",
    figaroDesc2: "Participation in the Vue 2 to Vue 3 transition, and JavaScript to TypeScript",
    figaroDesc3: "SEO optimization leading to a 35% increase in organic traffic: implementation of Elasticsearch aggregations, automated sitemap generation, and creation of optimized landing pages",
    figaroDesc4: "Participation in code reviews",
    figaroDesc5: "Use of generative AI",
    figaroDesc6: "Implementation of a CDN migration strategy on GCP, reducing image loading times by 60% and optimizing storage costs",
    figaroDesc7: "Website availability management - log analysis via Datadog and GCP",
    
    equativTitle: "Equativ Paris - C#.NET & Angular Full Stack Developer",
    equativDate: "Oct. 2023 - March 2024",
    equativDesc1: "Development of new features and unit tests within the R&D team responsible for ad data reporting and billing management",
    equativDesc2: "Participation in GCP migration and its production deployment",
    equativDesc3: "Creation and deployment of APIs and CI/CD via GitLab and ArgoCD",
    
    ivaluaTitle: "Ivalua Massy Palaiseau - C#.NET & JavaScript Full Stack Developer",
    ivaluaDate: "June 2020 - Sept. 2023",
    ivaluaDesc1: "Development of new features within the R&D team responsible for Procurement to Receipt",
    ivaluaDesc2: "Contribution to the refactoring of a monolithic application to a microservices architecture, and from a Webform frontend to React, reducing application loading time by 80%",
    ivaluaDesc3: "Participation in creating a module for calculating the carbon footprint of the supply chain",
    ivaluaDesc4: "Optimization of T-SQL queries and stored procedures",
    
    // Testimonials
    testimonialName: "Singdavann Srun",
    testimonialCompany: "LexisNexis - 02/17/2025",
    testimonialText: "Tanguy is an excellent full-stack developer. Although his assignment was brief, he was a great help to the Poly team. His autonomy and motivation are valuable on a daily basis. While sharing development best practices with colleagues, he quickly adapted to our various complex projects and produced quality work. We would not hesitate to call on his services again.",
    
    // Projects
    collocShareTitle: "CollocShare",
    collocShareDesc: "Application allowing roommates to share expenses, manage common workloads and organize daily life in a shared apartment.",
    
    // Footer
    ctaTitle: "Ready to start your project?",
    ctaText: "Schedule a call to discuss your needs",
    
    // Language
    switchLanguage: "Français",
  }
};

export default function Portfolio() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const t = translations[language];
  
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.3)_0%,rgba(103,0,26,0.1)_100%)] blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.3)_0%,transparent_50%)] blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(103,0,26,0.2)_0%,transparent_50%)] blur-[100px]" />
      </div>
      <div className="relative">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-20 text-white">
          <div className="flex items-center gap-4 mb-4">
            {/* Tech Stack Icons */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded bg-white/10 p-1">
                <svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.3067 58.8168C55.1757 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1757 41.1844 50.3067 41.1844C45.4376 41.1844 41.4904 45.1315 41.4904 50.0006C41.4904 54.8697 45.4376 58.8168 50.3067 58.8168Z" fill="#61DAFB"/>
                  <path d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z" stroke="#61DAFB" strokeWidth="5"/>
                  <path d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z" stroke="#61DAFB" strokeWidth="5"/>
                  <path d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z" stroke="#61DAFB" strokeWidth="5"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded bg-white/10 p-1">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.000488281H100V100H0V0.000488281Z" fill="#017ACB"/>
                  <path d="M48.0157 37.0317H52.8126V45.313H39.8438V82.1567L39.5 82.2505C39.0313 82.3755 32.8594 82.3755 31.5313 82.2349L30.4688 82.1411V45.313H17.5V37.0317L21.6094 36.9849C23.8594 36.9536 29.6406 36.9536 34.4532 36.9849C39.2657 37.0161 45.3594 37.0317 48.0157 37.0317ZM84.6251 78.2505C82.7189 80.2661 80.672 81.3911 77.2657 82.313C75.7813 82.7192 75.5313 82.7349 72.1876 82.7192C68.8438 82.7036 68.5782 82.7036 66.9532 82.2817C62.7501 81.2036 59.3594 79.0942 57.0469 76.1099C56.3907 75.2661 55.3126 73.5161 55.3126 73.2974C55.3126 73.2349 55.4688 73.0942 55.6719 73.0005C55.8751 72.9067 56.2969 72.6411 56.6407 72.438C56.9844 72.2349 57.6094 71.8599 58.0313 71.6411C58.4532 71.4224 59.6719 70.7036 60.7345 70.063C61.797 69.4224 62.7657 68.9067 62.8751 68.9067C62.9845 68.9067 63.1876 69.1255 63.3438 69.3911C64.2813 70.9692 66.4688 72.9849 68.0157 73.6724C68.9688 74.0786 71.0782 74.5317 72.0938 74.5317C73.0313 74.5317 74.7501 74.1255 75.672 73.7036C76.6563 73.2505 77.1564 72.7974 77.7501 71.8911C78.1564 71.2505 78.2032 71.0786 78.1876 69.8599C78.1876 68.7349 78.1251 68.4224 77.8126 67.9067C76.9376 66.4692 75.7501 65.7192 70.9376 63.5942C65.9688 61.3911 63.7345 60.0786 61.9219 58.313C60.5782 57.0005 60.3126 56.6411 59.4688 55.0005C58.3751 52.8911 58.2344 52.2036 58.2188 49.063C58.2032 46.8599 58.2501 46.1411 58.4844 45.3911C58.8126 44.2661 59.8751 42.0942 60.3594 41.5474C61.3594 40.3755 61.7188 40.0161 62.422 39.438C64.547 37.688 67.8595 36.5317 71.0313 36.4224C71.3907 36.4224 72.5782 36.4849 73.6876 36.563C76.8751 36.8286 79.047 37.6099 81.1407 39.2817C82.7189 40.5317 85.1095 43.4692 84.8751 43.8599C84.7189 44.0942 78.4845 48.2505 78.0782 48.3755C77.8282 48.4536 77.6564 48.3599 77.3126 47.9536C75.1876 45.4067 74.3282 44.8599 72.2657 44.7349C70.797 44.6411 70.0157 44.813 69.0313 45.4692C68.0001 46.1567 67.5001 47.2036 67.5001 48.6567C67.5157 50.7817 68.3282 51.7817 71.3282 53.2661C73.2657 54.2192 74.922 55.0005 75.047 55.0005C75.2345 55.0005 79.2501 57.0005 80.297 57.6255C85.172 60.4849 87.1564 63.4224 87.672 68.4849C88.047 72.2974 86.9689 75.7817 84.6251 78.2505Z" fill="white"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded bg-white/10 p-1">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M94.0943 29.111C94.0937 27.4461 93.7376 25.9749 93.0175 24.7126C92.3102 23.4707 91.2509 22.43 89.8301 21.6072C78.1017 14.8446 66.3619 8.10261 54.6374 1.33306C51.4765 -0.49178 48.4117 -0.424908 45.2743 1.42613C40.606 4.1789 17.2337 17.5694 10.2691 21.6035C7.40086 23.2642 6.00517 25.8053 6.00448 29.1079C6 42.708 6.00448 56.3081 6 69.9082C6 71.5366 6.3416 72.9795 7.02996 74.2229C7.73763 75.502 8.81171 76.5713 10.2653 77.4127C17.2303 81.4467 40.6057 94.8362 45.2729 97.59C48.4117 99.4421 51.4765 99.5083 54.6384 97.6831C66.3633 90.9132 78.1038 84.1712 89.8339 77.4086C91.2875 76.5675 92.3615 75.4976 93.0692 74.2194C93.7565 72.9757 94.0988 71.5332 94.0988 69.9045C94.0988 69.9045 94.0988 42.7115 94.0943 29.111Z" fill="#A179DC"/>
                  <path d="M50.1843 49.3755L7.03003 74.2228C7.7377 75.502 8.81178 76.5712 10.2654 77.4126C17.2304 81.4466 40.6058 94.8361 45.273 97.5899C48.4118 99.442 51.4765 99.5082 54.6385 97.683C66.3634 90.9131 78.1038 84.1711 89.8339 77.4085C91.2875 76.5674 92.3616 75.4975 93.0693 74.2193L50.1843 49.3755Z" fill="#280068"/>
                  <path d="M94.0945 29.111C94.0938 27.4461 93.7378 25.9749 93.0177 24.7126L50.1843 49.3759L93.0694 74.2195C93.7567 72.9758 94.0983 71.5332 94.099 69.9045C94.099 69.9045 94.099 42.7115 94.0945 29.111Z" fill="#390091"/>
                  <path d="M75.5919 40.0869V44.7314H80.2364V40.0869H82.5586V44.7314H87.2031V47.0536H82.5586V51.6977H87.2031V54.02H82.5586V58.6644H80.2364V54.02H75.5919V58.6644H73.2696V54.02H68.6255V51.6977H73.2696V47.0536H68.6255V44.7314H73.2696V40.0869H75.5919ZM80.2364 47.0533H75.5919V51.6977H80.2364V47.0533Z" fill="white"/>
                  <path d="M50.279 16.7618C62.3931 16.7618 72.9695 23.3408 78.6346 33.1199L78.5794 33.0258L64.3261 41.2324C61.5182 36.4779 56.3705 33.2691 50.4648 33.203L50.2786 33.2019C41.2734 33.2019 33.9726 40.5027 33.9726 49.5079C33.9697 52.3463 34.7112 55.1358 36.1232 57.598C38.9339 62.5048 44.2178 65.8143 50.279 65.8143C56.3777 65.8143 61.6916 62.4628 64.4878 57.5036L64.4199 57.6225L78.6515 65.867C73.0484 75.5634 62.6168 82.122 50.6437 82.2527L50.279 82.2547C38.1266 82.2547 27.5202 75.6351 21.8692 65.8043C19.1106 61.005 17.5322 55.4412 17.5322 49.5079C17.5322 31.4229 32.193 16.7615 50.2786 16.7615L50.279 16.7618Z" fill="white"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded bg-white/10 p-1">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="10" fill="#F29111"/>
                  <path d="M50 15C31.775 15 17 23.275 17 33.5V66.5C17 76.725 31.775 85 50 85C68.225 85 83 76.725 83 66.5V33.5C83 23.275 68.225 15 50 15ZM50 22.5C64.45 22.5 75.5 28.55 75.5 33.5C75.5 38.45 64.45 44.5 50 44.5C35.55 44.5 24.5 38.45 24.5 33.5C24.5 28.55 35.55 22.5 50 22.5ZM24.5 43.175C29.675 47.275 39.175 50 50 50C60.825 50 70.325 47.275 75.5 43.175V51.5C75.5 56.45 64.45 62.5 50 62.5C35.55 62.5 24.5 56.45 24.5 51.5V43.175ZM24.5 61.175C29.675 65.275 39.175 68 50 68C60.825 68 70.325 65.275 75.5 61.175V66.5C75.5 71.45 64.45 77.5 50 77.5C35.55 77.5 24.5 71.45 24.5 66.5V61.175Z" fill="white"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded bg-white/10 p-1">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.3381 3.0025H62.9288L32.2105 94.0709C32.0535 94.536 31.8249 94.9737 31.533 95.3684C31.2417 95.7635 30.8905 96.1097 30.4917 96.396C30.0929 96.6823 29.6529 96.9048 29.1853 97.0548C28.7178 97.2048 28.2303 97.2823 27.7402 97.2823H4.71122C3.96367 97.2823 3.22612 97.1048 2.56108 96.7623C1.89533 96.4207 1.32064 95.9253 0.884716 95.3172C0.448508 94.7091 0.163143 94.0059 0.0521613 93.2658C-0.059096 92.5258 0.00840845 91.7695 0.247174 91.0607L28.8666 6.21146C29.0228 5.74643 29.2516 5.3089 29.5441 4.91387C29.8354 4.51885 30.1879 4.17258 30.5854 3.88631C30.9842 3.60004 31.4242 3.37752 31.8918 3.22751C32.3593 3.0775 32.8468 3 33.3369 3V3.00125L33.3381 3.0025Z" fill="url(#azure-gradient-1)"/>
                  <path d="M87.8866 97.2825H61.3161C61.0199 97.2825 60.7236 97.2549 60.4311 97.1987C60.1398 97.1437 59.8535 97.0612 59.5773 96.9524C59.301 96.8437 59.036 96.7087 58.7847 96.5512C58.5338 96.3926 58.2981 96.211 58.0809 96.0086L27.929 67.8493C27.61 67.5515 27.3879 67.1648 27.2914 66.7392C27.195 66.3137 27.2289 65.8689 27.3888 65.4629C27.5486 65.0569 27.827 64.7084 28.1877 64.4628C28.549 64.2178 28.9753 64.0865 29.4116 64.0865H76.3346L87.8841 97.2837L87.8866 97.2825Z" fill="#0078D4"/>
                  <defs>
                    <linearGradient id="azure-gradient-1" x1="44.1376" y1="9.99045" x2="13.3856" y2="100.834" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#114A8B"/>
                      <stop offset="1" stopColor="#0669BC"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="w-8 h-8 rounded bg-white/10 p-1">
                <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#FFFFFF">
                  <g>
                    <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </div>
            </div>
            
            {/* Profile Photo and Language Toggle */}
            <div className="ml-auto flex items-center gap-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-0"
                onClick={toggleLanguage}
              >
                <Globe className="w-4 h-4 mr-2" />
                {t.switchLanguage}
              </Button>
              <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden">
                <Image
                  src="/Tanguy_pp.png"
                  alt="Tanguy Epifanic"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">Tanguy Epifanic</h1>
              <h2 className="text-2xl text-gray-200">
                {t.jobTitle} <span className="px-2 rounded inline-block" style={{ backgroundColor: "rgba(71, 150, 209)" }}>{t.jobTitleHighlight}</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="https://calendly.com/tanguy-epifanic" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {t.schedule}
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/CV_Tanguy_Epifanic.pdf" target="_blank" rel="noopener noreferrer" download>
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 15V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.downloadCV}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 text-xl font-medium text-gray-200">
            <span>{t.tagline1}</span>
            <ArrowRight className="w-6 h-6" />
            <span>{t.tagline2}</span>
            <ArrowRight className="w-6 h-6" />
            <span>{t.tagline3}</span>
          </div>
        </header>

        {/* Introduction & Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{t.introTitle}</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {t.introText}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{t.successesTitle}</h3>
                <ul className="text-gray-200 list-disc pl-5 space-y-2">
                  <li>{t.success1}</li>
                  <li>{t.success2}</li>
                  <li>{t.success3}</li>
                  <li>{t.success4}</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="https://www.linkedin.com/in/tanguy-epifanic/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    {t.linkedin}
                  </Link>
                </Button>
                <Button variant="outline" asChild className="bg-white hover:bg-white/90 text-[#FC5757] hover:text-[#FC5757] border-0">
                  <Link href="https://www.malt.fr/profile/tanguyepifanic" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t.malt}
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="mailto:tanguy.epifanic@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    {t.contact}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">

              <Card className="bg-white/10">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <p className="text-gray-200">{t.yearsOfExperience}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">4</div>
                  <p className="text-gray-200">{t.companiesHelped}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">3</div>
                  <p className="text-gray-200">{t.refactoredProjects}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">200%</div>
                  <p className="text-gray-200">{t.motivation}</p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="w-full justify-start bg-white/10 text-white mb-8">
              <TabsTrigger value="experience" className="text-lg py-2 px-4">{t.experience}</TabsTrigger>
              <TabsTrigger value="projects" className="text-lg py-2 px-4">{t.projects}</TabsTrigger>
              <TabsTrigger value="testimonials" className="text-lg py-2 px-4">{t.testimonials}</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded flex items-center justify-center" style={{ width: "60px", height: "60px" }}>
                        <Image
                          src="/LexisNexis.svg"
                          alt="LexisNexis Logo"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.lexisNexisTitle}</h3>
                        <p className="text-sm text-gray-400 mb-2">{t.lexisNexisDate}</p>
                        <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                          <li>{t.lexisNexisDesc1}</li>
                          <li>{t.lexisNexisDesc2}</li>
                          <li>{t.lexisNexisDesc3}</li>
                          <li>{t.lexisNexisDesc4}</li>
                          <li>{t.lexisNexisDesc5}</li>
                          <li>{t.lexisNexisDesc6}</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <Badge>C#</Badge>
                          <Badge>React.js</Badge>
                          <Badge>Azure DevOps</Badge>
                          <Badge>.NET</Badge>
                          <Badge>Moq</Badge>
                          <Badge>Transact-SQL</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded flex items-center justify-center" style={{ width: "60px", height: "60px" }}>
                        <Image
                          src="/FigaroClassifieds.png"
                          alt="Figaro Classifieds Logo"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.figaroTitle}</h3>
                        <p className="text-sm text-gray-400 mb-2">{t.figaroDate}</p>
                        <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                          <li>{t.figaroDesc1}</li>
                          <li>{t.figaroDesc2}</li>
                          <li>{t.figaroDesc3}</li>
                          <li>{t.figaroDesc4}</li>
                          <li>{t.figaroDesc5}</li>
                          <li>{t.figaroDesc6}</li>
                          <li>{t.figaroDesc7}</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Go</Badge>
                          <Badge>VueJS</Badge>
                          <Badge>ElasticSearch</Badge>
                          <Badge>Docker</Badge>
                          <Badge>GCP</Badge>
                          <Badge>GitHub</Badge>
                          <Badge>Kubernetes</Badge>
                          <Badge>Datadog</Badge>
                          <Badge>GraphQL</Badge>
                          <Badge>Helm</Badge>
                          <Badge>TypeScript</Badge>
                          <Badge>Nuxt.js</Badge>
                          <Badge>Jest</Badge>
                          <Badge>Terraform</Badge>
                          <Badge>Redis</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded flex items-center justify-center" style={{ width: "60px", height: "60px" }}>
                        <Image
                          src="/Equativ.png"
                          alt="Equativ Logo"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.equativTitle}</h3>
                        <p className="text-sm text-gray-400 mb-2">{t.equativDate}</p>
                        <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                          <li>{t.equativDesc1}</li>
                          <li>{t.equativDesc2}</li>
                          <li>{t.equativDesc3}</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <Badge>C#</Badge>
                          <Badge>.NET</Badge>
                          <Badge>Angular</Badge>
                          <Badge>GCP</Badge>
                          <Badge>GitLab</Badge>
                          <Badge>T-SQL</Badge>
                          <Badge>PostgreSQL</Badge>
                          <Badge>TypeScript</Badge>
                          <Badge>Argo CD</Badge>
                          <Badge>Datadog</Badge>
                          <Badge>EF Core</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded flex items-center justify-center" style={{ width: "60px", height: "60px" }}>
                        <Image
                          src="/Ivalua.png"
                          alt="Ivalua Logo"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.ivaluaTitle}</h3>
                        <p className="text-sm text-gray-400 mb-2">{t.ivaluaDate}</p>
                        <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                          <li>{t.ivaluaDesc1}</li>
                          <li>{t.ivaluaDesc2}</li>
                          <li>{t.ivaluaDesc3}</li>
                          <li>{t.ivaluaDesc4}</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <Badge>C#</Badge>
                          <Badge>.NET</Badge>
                          <Badge>ElasticSearch</Badge>
                          <Badge>Agile</Badge>
                          <Badge>JavaScript</Badge>
                          <Badge>TypeScript</Badge>
                          <Badge>T-SQL</Badge>
                          <Badge>ASP.NET Core</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded">
                        <GitBranch className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.collocShareTitle}</h3>
                        <p className="text-gray-600 mb-4">
                          {t.collocShareDesc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Next.js</Badge>
                          <Badge>React</Badge>
                          <Badge>TypeScript</Badge>
                          <Badge>Prisma</Badge>
                          <Badge>PostgreSQL</Badge>
                          <Badge>Tailwind CSS</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded">
                        <MessageSquare className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <div className="flex gap-4 items-center mb-4">
                          <div className="rounded bg-blue-500/10 p-2 text-blue-500 font-semibold">LN</div>
                          <div>
                            <p className="font-medium">{t.testimonialName}</p>
                            <p className="text-sm text-gray-500">{t.testimonialCompany}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 italic mb-4">
                          {t.testimonialText}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        {/* Contact Section */}
        <footer className="container mx-auto px-4 py-12">
          <Card className="bg-white/10">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">{t.ctaTitle}</h2>
                  <p className="text-gray-200">{t.ctaText}</p>
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                  <Button variant="secondary" asChild className="flex-1 sm:flex-initial">
                    <Link href="mailto:tanguy.epifanic@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      {t.contact}
                    </Link>
                  </Button>
                  <Button asChild className="flex-1 sm:flex-initial">
                    <Link href="https://calendly.com/tanguy-epifanic" target="_blank" rel="noopener noreferrer">
                      {t.schedule}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  )
}

