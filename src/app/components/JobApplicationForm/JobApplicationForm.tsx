// src/app/components/JobApplicationForm/JobApplicationForm.tsx
"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FormInput from "../ContactFormSection/FormInput";
import FormTextarea from "../ContactFormSection/FormTextarea";
import SubmitButton from "../ContactFormSection/SubmitButton";
import { toast, Toaster } from "react-hot-toast";

interface JobApplicationFormProps {
    jobId: number;
    jobTitle: string;
}

function JobApplicationForm({ jobId }: JobApplicationFormProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        linkedIn: '',
        resume: null as File | null,
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                resume: e.target.files![0]
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append('jobId', jobId.toString());
        formDataToSend.append('fullName', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('linkedIn', formData.linkedIn);
        formDataToSend.append('message', formData.message);

        if (formData.resume) {
            formDataToSend.append('resume', formData.resume);
        }

        try {
            const response = await fetch('/api/applications', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Application failed');

            toast.success('Application submitted successfully!');
            setFormData({
                fullName: '',
                email: '',
                linkedIn: '',
                resume: null,
                message: ''
            });

        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to submit application');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section
            ref={ref}
            id="apply"
            className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.form
                className="w-full max-w-[600px] space-y-6 mx-auto px-4"
                onSubmit={handleSubmit}
                variants={containerVariants}
            >
                <motion.h2
                    className="text-3xl font-bold text-center mb-8"
                    variants={itemVariants}
                >
                    Apply for This Position
                </motion.h2>

                <motion.div variants={itemVariants}>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Resume/CV (PDF or DOCX) *
                        </label>
                        <input
                            type="file"
                            accept=".pdf,.docx"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            required
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            Max file size: 5MB. Accepted formats: .pdf, .docx
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <FormInput
                        label="Full Name *"
                        placeholder='e.g Michael Dwayne'
                        aria-label='Full Name'
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        required
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <FormInput
                        label="Email *"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        aria-label='Email'
                        placeholder='e.g michael@globalenterprises.com'
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <FormInput
                        label="LinkedIn Profile URL *"
                        type="url"
                        value={formData.linkedIn}
                        onChange={(e) => setFormData(prev => ({ ...prev, linkedIn: e.target.value }))}
                        required
                        aria-label='LinkedIn Profile URL'
                        placeholder='link to your LinkedIn profile'
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <FormTextarea
                        label="Cover Letter / Message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        aria-label='Message'
                        placeholder='Enter your message here...'
                    />
                </motion.div>

                <motion.div
                    className="flex justify-center"
                    variants={itemVariants}
                >
                    <SubmitButton label={isSubmitting ? "Submitting..." : "Submit Application"}
                        disabled={isSubmitting} />
                </motion.div>
            </motion.form>
            <Toaster />
        </motion.section>
    );
}

export default JobApplicationForm;