import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { lazy, Suspense, forwardRef } from 'react';
import styles from '../styles/ServicesPage.module.css'; // Importando como CSS Modules
import ServicesForm from '../components/ServicesForm';

// Lazy load OfferForm for performance optimization
const OfferForm = lazy(() => import('../components/OfferForm'));

// MotionBox is now a motion.div instead of Chakra Box
const MotionBox = motion(
  forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => (
    <div ref={ref} {...props} />
  ))
);

const services = [
  {
    title: 'Custom Web Development',
    description: 'We build fully customized, responsive websites that drive engagement and boost conversions, ensuring optimal performance for your business.',
    icon: FaCheckCircle,
  },
  {
    title: 'High-Converting Landing Pages',
    description: 'We craft landing pages designed to capture leads, increase conversion rates, and improve your marketing ROI with SEO best practices.',
    icon: FaCheckCircle,
  },
  {
    title: 'Seamless API Integration',
    description: 'Our API integration services ensure smooth communication between your platform and third-party services for dynamic, real-time functionality.',
    icon: FaCheckCircle,
  },
  {
    title: 'User-Centered UI/UX Design',
    description: 'We design intuitive and engaging user interfaces that prioritize user experience, turning visitors into loyal customers.',
    icon: FaCheckCircle,
  },
  {
    title: 'Maintenance & Technical Support',
    description: 'Keep your website secure and up-to-date with our ongoing maintenance and support services, tailored to your specific needs.',
    icon: FaCheckCircle,
  },
  {
    title: 'Responsive & Mobile-First Design',
    description: 'We ensure that your website looks and functions flawlessly on all devices, providing a seamless experience from mobile to desktop.',
    icon: FaCheckCircle,
  },
  {
    title: 'E-commerce Development',
    description: 'We develop robust e-commerce platforms that are tailored to scale, optimized for smooth transactions, and focused on driving sales growth.',
    icon: FaCheckCircle,
  },
  {
    title: 'Performance Optimization',
    description: 'Our performance optimization services ensure your website loads quickly, improving user experience and enhancing your site’s search engine rankings.',
    icon: FaCheckCircle,
  },
];

const ServicesPage: React.FC = () => {
  const [cardState, setCardState] = useState<'initial' | 'selectedService' | 'selectedProposal'>('initial');

  // Handles the option selected by the user
  const handleOptionSelect = (option: 'services' | 'proposal') => {
    setCardState(option === 'services' ? 'selectedService' : 'selectedProposal');
  };

  // Handles focus on scroll complete and accessibility
  const onCardAnimationComplete = () => {
    const section = cardState === 'selectedService' 
      ? document.querySelector(`.${styles.servicesGrid}`) 
      : document.querySelector(`.${styles.contactFormSection}`);

    if (section instanceof HTMLElement) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.focus();  // Accessibility improvement
    }
  };

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        className={styles.heroSection}
      >
        {cardState === 'initial' ? (
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              What Are You Looking For?
            </h1>
            <p className={styles.heroDescription}>
              See our services or tell us about your project for a personalized proposal.
            </p>
            <button
              onClick={() => handleOptionSelect('services')}
              className={`${styles.heroButton} ${styles.primaryButton}`}
            >
              View Services
            </button>
            <button
              onClick={() => handleOptionSelect('proposal')}
              className={`${styles.heroButton} ${styles.secondaryButton}`}
            >
              Get Personalized Proposal
            </button>
          </div>
        ) : (
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={onCardAnimationComplete}
          >
            <h2 className={styles.heroProcessing}>
              Processing your choice...
            </h2>
          </MotionBox>
        )}
      </MotionBox>

      {/* Service Cards Section */}
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={styles.serviceCard}
          >
            <FaCheckCircle size={40} color="#3a2104" className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>
              {service.title}
            </h3>
            <p className={styles.serviceDescription}>
              {service.description}
            </p>
          </MotionBox>
        ))}
      </div>

      {/* Contact Form Section */}
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.contactFormSection}
      >
        <h2 className={styles.formTitle}>
          Get a Personalized Proposal
        </h2>
        <p className={styles.formDescription}>
          Tell us about your project, and we will get back to you with a tailored offer.
        </p>
        <Suspense fallback={<div>Loading form...</div>}>
          <ServicesForm />
        </Suspense>
      </MotionBox>
    </div>
  );
};

export default ServicesPage;
