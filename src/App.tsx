import "./App.css";
import { useState, useEffect } from "react";
import AddExpense from "./addexpense";
import Expenses from "./expenses";
import Analytics from "./analytics";
import Budgets from "./budgets";
import Reports from "./reports";
import Settings from "./settings";
import Dashboard from "./dashboard";
interface Expense {
  id: number;
  amount: number;
  description: string;
  categoryId: number;
  date: string;
  timestamp: number;
  notes?: string;
}

interface Category {
  id: number;
  emoji: string;
  name: string;
  budget: number;
  color: string;
}

interface CategoryStat extends Category {
  spent: number;
  remaining: number;
  percentage: string;
  expenseCount: number;
  isOverBudget: boolean;
}

interface WeeklyDataPoint {
  day: string;
  amount: number;
  date: string;
}

interface CommonProps {
  expenses: Expense[];
  categories: Category[];
  monthlyBudget: number;
  totalExpenses: number;
  remainingBudget: number;
  budgetPercentage: string;
  currentTime: Date;
  setCurrentPage: (page: string) => void;
  addExpense: (expense: Omit<Expense, "id" | "date" | "timestamp">) => void;
  deleteExpense: (id: number) => void;
  updateExpense: (id: number, updatedExpense: Partial<Expense>) => void;
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  getCategoryStats: () => CategoryStat[];
  getWeeklyData: () => WeeklyDataPoint[];
}

function App() {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, emoji: "🛒", name: "Alimentation", budget: 600, color: "#ff6b6b" },
    { id: 2, emoji: "⛽", name: "Transport", budget: 300, color: "#4ecdc4" },
    { id: 3, emoji: "🍽️", name: "Restaurant", budget: 200, color: "#45b7d1" },
    { id: 4, emoji: "🎬", name: "Loisirs", budget: 250, color: "#f9ca24" },
    { id: 5, emoji: "👕", name: "Shopping", budget: 300, color: "#6c5ce7" },
    { id: 6, emoji: "🏠", name: "Logement", budget: 800, color: "#a29bfe" },
    { id: 7, emoji: "💊", name: "Santé", budget: 150, color: "#fd79a8" },
    { id: 8, emoji: "📱", name: "Tech", budget: 100, color: "#fdcb6e" },
  ]);
  const [monthlyBudget] = useState<number>(2500);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const totalExpenses: number = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const remainingBudget: number = monthlyBudget - totalExpenses;
  const budgetPercentage: string =
    expenses.length > 0
      ? ((totalExpenses / monthlyBudget) * 100).toFixed(1)
      : "0.0";

  const addExpense = (
    newExpense: Omit<Expense, "id" | "date" | "timestamp">
  ): void => {
    const expense: Expense = {
      id: Date.now(),
      ...newExpense,
      date: new Date().toLocaleDateString("fr-FR"),
      timestamp: Date.now(),
    };
    setExpenses([...expenses, expense]);
    setCurrentPage("dashboard");
  };

  const deleteExpense = (id: number): void => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const updateExpense = (
    id: number,
    updatedExpense: Partial<Expense>
  ): void => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  const getCategoryStats = (): CategoryStat[] => {
    return categories.map((category) => {
      const categoryExpenses = expenses.filter(
        (expense) => expense.categoryId === category.id
      );
      const spent = categoryExpenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
      );
      const percentage =
        category.budget > 0 ? (spent / category.budget) * 100 : 0;
      return {
        ...category,
        spent,
        remaining: category.budget - spent,
        percentage: percentage.toFixed(1),
        expenseCount: categoryExpenses.length,
        isOverBudget: spent > category.budget,
      };
    });
  };

  const getWeeklyData = (): WeeklyDataPoint[] => {
    const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    const today = new Date();
    const weekData: WeeklyDataPoint[] = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dayExpenses = expenses.filter((expense) => {
        const expenseDate = new Date(expense.timestamp);
        return expenseDate.toDateString() === date.toDateString();
      });
      const total = dayExpenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
      );
      weekData.push({
        day: days[date.getDay() === 0 ? 6 : date.getDay() - 1],
        amount: total,
        date: date.toLocaleDateString("fr-FR"),
      });
    }
    return weekData;
  };

  const commonProps: CommonProps = {
    expenses,
    categories,
    monthlyBudget,
    totalExpenses,
    remainingBudget,
    budgetPercentage,
    currentTime,
    setCurrentPage,
    addExpense,
    deleteExpense,
    updateExpense,
    setExpenses,
    setCategories,
    getCategoryStats,
    getWeeklyData,
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-section">
          <h2>💰 Billpad</h2>
          <div className="user-info">
            <div className="avatar">TD</div>
            <div className="user-details">
              <span className="username">Theodore</span>
              <span className="status">🟢 En ligne</span>
            </div>
          </div>
        </div>

        <nav>
          <ul>
            <li
              className={currentPage === "dashboard" ? "active" : ""}
              onClick={() => setCurrentPage("dashboard")}
            >
              🏠 Dashboard
            </li>
            <li
              className={currentPage === "add-expense" ? "active" : ""}
              onClick={() => setCurrentPage("add-expense")}
            >
              ➕ Ajouter Dépense
            </li>
            <li
              className={currentPage === "expenses" ? "active" : ""}
              onClick={() => setCurrentPage("expenses")}
            >
              💳 Mes Dépenses
            </li>
            <li
              className={currentPage === "analytics" ? "active" : ""}
              onClick={() => setCurrentPage("analytics")}
            >
              📊 Analytics
            </li>
            <li
              className={currentPage === "budgets" ? "active" : ""}
              onClick={() => setCurrentPage("budgets")}
            >
              🎯 Budgets
            </li>
            <li
              className={currentPage === "reports" ? "active" : ""}
              onClick={() => setCurrentPage("reports")}
            >
              📈 Rapports
            </li>
            <li
              className={currentPage === "settings" ? "active" : ""}
              onClick={() => setCurrentPage("settings")}
            >
              ⚙️ Paramètres
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-label">Total dépenses</span>
              <span className="stat-value">{totalExpenses.toFixed(2)}€</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Budget restant</span>
              <span className="stat-value">{remainingBudget.toFixed(2)}€</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "add-expense" && <AddExpense />}
        {currentPage === "expenses" && <Expenses />}
        {currentPage === "analytics" && <Analytics />}
        {currentPage === "budgets" && <Budgets />}
        {currentPage === "reports" && <Reports />}
        {currentPage === "settings" && <Settings />}
      </main>
    </div>
  );
}

export default App;
