import CSharpIcon from '../assets/logos/C-logo.svg';
import JavaIcon from '../assets/logos/Java-logo.svg';
import ReactIcon from '../assets/logos/React-logo.svg';


export const projects = [
	{
		title: "Workflow Automation Orchestrator (n8n)",
		techStack: "n8n • Node.js • TypeScript • PostgreSQL",
		description: "Event‑driven workflows for data sync, notifications, and back‑office automation. Custom nodes, secrets management, retries, and metrics.",
		ctaText: "View Repo →",
		ctaLink: "#",
		icon: CSharpIcon
	},
	{
		title: "SaaS API Starter (Auth, Billing, RBAC)",
		techStack: "Node.js • TypeScript • PostgreSQL • Supabase • Stripe",
		description: "Production‑ready REST/GraphQL API with JWT auth, role‑based access, Stripe subscriptions, and rate‑limited endpoints.",
		ctaText: "Get Source < / >",
		ctaLink: "#",
		icon: JavaIcon
	},
	{
		title: "Realtime Chat Service",
		techStack: "Phoenix • WebSockets • Redis • Docker",
		description: "Low‑latency chat with channels, presence, and backpressure handling. Includes load tests and horizontal scaling notes.",
		ctaText: "Live Demo →",
		ctaLink: "#",
		icon: ReactIcon
	},
];