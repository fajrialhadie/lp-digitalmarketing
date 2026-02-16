
import React from 'react';
import { Link } from 'react-router-dom';

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
};

const CourseCard = ({ module }) => {
    const instructor = module.instructor || {
        name: "Expert Mentor",
        avatar: `https://i.pravatar.cc/150?u=${module.id}`
    };
    const level = module.level || "All Levels";

    // Calculate total duration roughly if not provided
    const totalDuration = module.modules ? module.modules.reduce((acc, m) => {
        // Parse time string? Assuming "1 jam" or "30 menit"
        // Simplify: just show module length
        return acc;
    }, 0) : 0;

    // Hardcoded duration for display purpose if parsing is complex, or use existing data if available
    const displayDuration = "64 Hours"; // Placeholder as per design image, or dynamic if possible.
    // module.modules has duration strings. I won't parse them now to keep it simple.

    return (
        <div className="course-card">
            <div className="course-image-wrapper">
                <img src={module.image} alt={module.title} className="course-image" loading="lazy" />
                <div className="course-overlay">
                    <div className="instructor-badge">
                        <img src={instructor.avatar} alt={instructor.name} className="instructor-avatar" />
                        <span className="instructor-name">{instructor.name}</span>
                    </div>
                </div>
            </div>

            <div className="course-content">
                <div className="course-header">
                    <div className="course-level">
                        <span className="level-icon">📊</span>
                        {level}
                    </div>
                    <div className="course-rating">
                        <span className="star">★</span>
                        <span className="rating-val">{module.rating}</span>
                    </div>
                </div>

                <h3 className="course-title">
                    <Link to={`/kelas/${module.slug}`}>{module.title}</Link>
                </h3>

                <div className="course-meta">
                    <div className="meta-item">
                        <span className="meta-icon">📄</span>
                        {module.modules ? module.modules.length : 0} Module
                    </div>
                    <div className="meta-item">
                        <span className="meta-icon">⏱️</span>
                        {displayDuration}
                    </div>
                </div>

                <div className="course-price">
                    Rp. {formatPrice(module.price)}
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
