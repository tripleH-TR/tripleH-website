"use client";
import { Fragment, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import data from "@/locales/static.json";
import Image from "next/image";
import { Button } from "@headlessui/react";
import clsx from "clsx";

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
        <section className="grid grid-cols-2 md:grid-cols-6 gap-5 px-3 my-6 max-w-7xl mx-auto">
            {data.Referances.map((item, index) => (
                <div
                    key={index}
                    className="relative flex flex-col items-center">
                    <Image
                        src={item.logo}
                        alt={`Logo ${index + 1}`}
                        onClick={() => openGallery(item)}
                        className="cursor-pointer object-contain grayscale hover:grayscale-0 hover:scale-105 hover:shadow-2xl transition-all duration-500 rounded-md"
                        width={200}
                        height={200}
                    />
                </div>

            ))}

            {/* Genişleyen ve resimleri gösteren alan */}
            <AnimatePresence>
                {isModalOpen && selectedLogo && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.1 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        className="fixed inset-0 z-50 bg-secondarydarker bg-opacity-75 p-4 overflow-auto flex items-center justify-center"
                    >
                        <Button as={Fragment}>
                            {({ hover }) => (
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className={clsx(
                                        'absolute top-8 right-8 text-3xl z-10 py-2 px-4 shadow-2xl bg-alternatebright text-white duration-500 rounded-full',
                                        hover && 'bg-primary scale-125',
                                    )}
                                >
                                    X
                                </button>
                            )}
                        </Button>
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
