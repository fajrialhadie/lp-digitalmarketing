
import React from 'react';
import CourseCard from './CourseCard';

const ModulesGrid = ({ modules }) => {
    return (
        <section className="landing-modules">
            <div className="container modules-container">
                <div className="modules-header">
                    <h2>Expand Your Career Opportunity<br /><span className="highlight">With Our Courses</span></h2>
                    <p>Unlock new opportunities with our comprehensive course catalog.</p>
                    <div className="modules-tabs">
                        <button className="active">All Categories</button>
                        <button>Development</button>
                        <button>Design</button>
                        <button>Data Science</button>
                    </div>
                </div>
                <div className="modules-grid-layout">
                    {modules.map(module => (
                        <CourseCard key={module.id} module={module} />
                    ))}
                </div>
                <div className="modules-footer-action">
                    <button className="btn btn-outline">Explore All Course ↗</button>
                </div>
            </div>
        </section>
    );
};

export default ModulesGrid;
