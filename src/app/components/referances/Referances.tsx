"use client";
import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import data from "@/locales/static.json";
import Image from "next/image";

interface ReferenceItem {
    logo: string;
    images: string[];
}


export default function References() {
    const [selectedLogo, setSelectedLogo] = useState<ReferenceItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openGallery = (logo: ReferenceItem) => {
        setSelectedLogo(logo);
        setIsModalOpen(true);
    };

    return (
        <section className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4 max-w-7xl mx-auto my-10">
            {data.Referances.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <Image
                        src={item.logo}
                        alt={`Logo ${index + 1}`}
                        onClick={() => openGallery(item)}
                        className="cursor-pointer object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                        width={150}
                        height={150}
                    />
                </div>
            ))}

            {/* Genişleyen ve resimleri gösteren alan */}
            <AnimatePresence>
                {isModalOpen && selectedLogo && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        className="fixed inset-0 z-50 bg-secondarydarker bg-opacity-75 p-4 overflow-auto flex items-center justify-center"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-8 right-8 text-3xl z-10 py-2 px-4 shadow-2xl bg-alternatebright text-white hover:bg-primary transition-colors duration-500 rounded-full"
                        >
                            X
                        </button>
                        <ImageGallery
                            items={selectedLogo.images.map((img) => ({
                                original: img,
                                thumbnail: img,
                            }))}
                            showThumbnails={true}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            lazyLoad
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
