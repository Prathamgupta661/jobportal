import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="w-full px-2 sm:px-0">
            <Carousel className="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto my-10 sm:my-16 md:my-20">
                <CarouselContent>
                    {category.map((cat, index) => (
                        <CarouselItem
                            key={cat}
                            className="
                                basis-full
                                sm:basis-1/2
                                md:basis-1/3
                                lg:basis-1/4
                                flex justify-center
                                py-2
                            "
                        >
                            <Button
                                onClick={() => searchJobHandler(cat)}
                                variant="outline"
                                className="rounded-full w-full sm:w-auto text-xs sm:text-sm md:text-base"
                            >
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;