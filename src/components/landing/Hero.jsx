
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="landing-hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Unlock Your Potential</span>
                    <h1>Crafting a Better Life Through Skill Development</h1>
                    <p>Explore our e-course platform and unlock your full potential through skill development. Build a brighter future and transform your life with our engaging & transformative courses.</p>
                    <div className="hero-actions">
                        <Link to="/courses" className="btn btn-primary">Explore Course</Link>
                        <Link to="/login" className="btn btn-secondary">Try Free Now</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-img-bg">
                        <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Student" className="hero-main-img" />
                        <div className="hero-floating-card card-stats">
                            <div className="stats-icon">🎓</div>
                            <div className="stats-info">
                                <strong>100k Students Enroll</strong>
                                <div className="avatars">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                                    <img src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                                    <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" />
                                    <img src="https://i.pravatar.cc/100?img=4" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="hero-floating-card card-course-1">
                            <div className="card-icon">🙂</div>
                            <div className="card-text">
                                <strong>Self Improvement</strong>
                                <span>20 Courses</span>
                            </div>
                        </div>
                        <div className="hero-floating-card card-course-2">
                            <div className="card-icon">🎨</div>
                            <div className="card-text">
                                <strong>Creative Design</strong>
                                <span>30 Courses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
