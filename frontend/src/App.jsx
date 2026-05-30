import { useState, useEffect } from "react";
import axios from "axios";
import {
  Dumbbell,
  Trophy,
  Users,
  MapPin,
  MessageCircle,
  Calendar,
  Flame,
  ChevronRight,
  Star,
  Activity,
  Bike,
  Goal,
  X,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "10K+", label: "Active Members" },
  { value: "500+", label: "Challenges" },
  { value: "50+", label: "Sports Categories" },
  { value: "100K+", label: "Posts Shared" },
];

const features = [
  {
    icon: Users,
    title: "Community Feed",
    description:
      "Share workouts, transformation photos, and achievements with the community.",
  },
  {
    icon: Trophy,
    title: "Group Challenges",
    description:
      "Join public and private challenges with leaderboards and rewards.",
  },
  {
    icon: Activity,
    title: "Progress Tracking",
    description:
      "Track calories, distance, streaks, and achievement badges.",
  },
  {
    icon: MapPin,
    title: "Nearby Connections",
    description: "Discover workout partners and athletes near you.",
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    description: "Organize marathons, matches, and local sports meetups.",
  },
  {
    icon: MessageCircle,
    title: "Messaging",
    description: "Connect through direct and group chats.",
  },
];

const steps = [
  "Create your profile",
  "Join communities",
  "Participate in challenges",
  "Track your progress",
];

const challengeData = [
  {
    title: "30-Day Push-Up Challenge",
    participants: "2,500",
    progress: 85,
  },
  {
    title: "5K Running Challenge",
    participants: "1,800",
    progress: 70,
  },
  {
    title: "Weight Loss Challenge",
    participants: "3,200",
    progress: 92,
  },
];

const testimonials = [
  {
    name: "Arjun Kumar",
    role: "Runner",
    review:
      "SPORBIT helped me stay consistent and connect with runners in my city.",
  },
  {
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
    review:
      "The challenge system keeps me motivated every single day.",
  },
  {
    name: "Rahul Verma",
    role: "Cyclist",
    review:
      "Amazing community and beautifully designed platform.",
  },
];

function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-blue-300 mb-4">
        {badge}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      <p className="text-slate-400 text-lg">{subtitle}</p>
    </div>
  );
}

function Navbar({ onJoin }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          SPORBIT
        </h1>

        <nav className="hidden md:flex gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#challenges" className="hover:text-white transition">
            Challenges
          </a>
          <a href="#testimonials" className="hover:text-white transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <button
          onClick={onJoin}
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Join Now
        </button>
      </div>
    </header>
  );
}

function Hero({ onJoin }) {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-24">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-blue-300 mb-6">
            The Ultimate Sports & Fitness Community
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
            Where Sports and Fitness Enthusiasts Unite.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
            Connect, compete, and grow stronger with athletes, gym-goers,
            runners, cyclists, and sports lovers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onJoin}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 transition"
            >
              Join SPORBIT
            </button>
            <a
              href="#challenges"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition text-center"
            >
              Explore Challenges
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[Dumbbell, Bike, Goal].map((Icon, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Card title="Weekly Challenge" value="5K Run • 1,842 Participants" />
            <Card title="Your Streak" value="14 Days 🔥" accent="text-orange-400" />
            <Card title="XP Earned" value="2,450 XP" accent="text-blue-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ title, value, accent = "text-white" }) {
  return (
    <div className="bg-white/5 rounded-2xl p-4">
      <p className="text-white font-semibold">{title}</p>
      <p className={`${accent} font-bold text-lg`}>{value}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {item.value}
            </h3>
            <p className="text-slate-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Features"
          title="Everything You Need to Stay Motivated"
          subtitle="Powerful tools to connect, compete, and improve."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                  <Icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="How It Works"
          title="Start Your Journey in 4 Simple Steps"
          subtitle="Join the community and unlock your potential."
        />

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-4">
                {index + 1}
              </div>
              <p className="text-white font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { API_BASE_URL } from "./config";

function Challenges() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/challenges`)
      .then((res) => res.json())
      .then((data) => setChallenges(data))
      .catch((err) => console.log(err));
  }, [API_BASE_URL]);

  return (
    <section id="challenges" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Challenges"
          title="Active Challenges"
          subtitle="Fetched directly from MongoDB"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge._id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {challenge.title}
              </h3>

              <p className="text-slate-400">
                Category: {challenge.category}
              </p>

              <p className="text-blue-400 mt-2">
                Duration: {challenge.duration} Days
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Testimonials"
          title="Loved by Fitness Enthusiasts"
          subtitle="Real stories from our growing community."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-6">“{testimonial.review}”</p>
              <h4 className="text-white font-semibold">{testimonial.name}</h4>
              <p className="text-slate-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onJoin }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[2.5rem] p-12 text-center backdrop-blur-2xl">
        <Flame className="w-12 h-12 text-orange-400 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Fitness Journey?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of athletes and fitness enthusiasts who are leveling up
          every day with SPORBIT.
        </p>
        <button
          onClick={onJoin}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 transition inline-flex items-center gap-2"
        >
          Join SPORBIT <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 py-10 px-6 text-slate-400"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-white font-bold text-2xl mb-2">SPORBIT</h3>
          <p>The ultimate sports and fitness community platform.</p>
        </div>

        <div className="flex gap-6 flex-wrap">
          <a href="#">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Gym",
  });

  const [errors, setErrors] = useState({});
  const [members, setMembers] = useState([]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newMember = {
      id: Date.now(),
      ...formData,
    };

    setMembers((prev) => [...prev, newMember]);

    setFormData({
      name: "",
      email: "",
      interest: "Gym",
    });

    setErrors({});
  };

  const deleteMember = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-5xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Join SPORBIT</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Interest
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
                  >
                    {[
                      "Gym",
                      "Running",
                      "Cycling",
                      "Football",
                      "Cricket",
                      "Yoga",
                      "Calisthenics",
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-[1.02] transition"
                >
                  Add Member
                </button>
              </form>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Joined Members ({members.length})
                </h3>

                <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
                  {members.length === 0 ? (
                    <p className="text-slate-400">No members added yet.</p>
                  ) : (
                    members.map((member) => (
                      <div
                        key={member.id}
                        className="bg-white/5 border border-white/10 rounded-2xl p-4"
                      >
                        <h4 className="text-white font-semibold">
                          {member.name}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {member.email}
                        </p>
                        <p className="text-blue-400 text-sm mt-1">
                          {member.interest}
                        </p>

                        <button
                          onClick={() => deleteMember(member.id)}
                          className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label className="block text-sm text-slate-300 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-slate-950 text-white min-h-screen scroll-smooth">
      <Navbar onJoin={() => setShowModal(true)} />
      <Hero onJoin={() => setShowModal(true)} />
      <Stats />
      <Features />
      <HowItWorks />
      <Challenges />
      <Testimonials />
      <CTA onJoin={() => setShowModal(true)} />
      <Footer />

      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}