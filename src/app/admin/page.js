"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // Assuming you have Shadcn/ui Table component installed

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Admin1!"; // Be mindful of hardcoding sensitive details

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("isNanditaAdminLoggedIn") === "true"
  );

  // State for submissions
  const [submissions, setSubmissions] = useState([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [hasFetched, setHasFetched] = useState(false);

  const fetchSubmissions = async () => {
    setLoadingSubmissions(true);
    setFetchError("");
    try {
      const response = await fetch("/api/submissions");
      const data = await response.json();
      if (data.success && Array.isArray(data.submissions)) {
        setSubmissions(data.submissions);
        setHasFetched(true);
        // console.log("Fetched submissions:", data.submissions);
      }
    } catch (err) {
      setFetchError(err.message || "An unexpected error occurred.");
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("isNanditaAdminLoggedIn", "true");
      setIsLoggedIn(true);
      setError("");
      setUsername("");
      setPassword("");
      await fetchSubmissions();
    } else {
      setError("Invalid username or password.");
      localStorage.removeItem("isNanditaAdminLoggedIn");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isNanditaAdminLoggedIn");
    setIsLoggedIn(false);
    setSubmissions([]); // Clear submissions on logout
    setFetchError("");
    setUsername("");
    setPassword("");
    setHasFetched(false);
  };

  // If logged in, fetch submissions on first render if not already fetched
  if (
    isLoggedIn &&
    !hasFetched &&
    !loadingSubmissions &&
    submissions.length === 0 &&
    !fetchError
  ) {
    fetchSubmissions();
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Admin Dashboard - Contact Submissions
            </h1>
            <div className="flex space-x-2">
              <Button
                onClick={fetchSubmissions}
                disabled={loadingSubmissions}
                variant="outline"
              >
                {loadingSubmissions ? "Refreshing..." : "Refresh Data"}
              </Button>
              <Button onClick={handleLogout} variant="destructive">
                Logout
              </Button>
            </div>
          </div>

          {loadingSubmissions && (
            <p className="text-blue-500">Loading submissions...</p>
          )}
          {fetchError && (
            <p className="text-red-500 bg-red-100 p-3 rounded-md">
              Error: {fetchError}
            </p>
          )}

          {!loadingSubmissions && !fetchError && submissions.length === 0 && (
            <p className="text-gray-500">No submissions found.</p>
          )}

          {!loadingSubmissions && !fetchError && submissions.length > 0 && (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Submitted At</TableHead>
                    <TableHead>Name</TableHead>
                    {/* <TableHead>Last Name</TableHead> */}
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    {/* <TableHead>Country</TableHead> */}
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>
                        {new Date(submission.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>{submission.name}</TableCell>{" "}
                      {/* Adapting to potential field names */}
                      {/* <TableCell>{submission.fields.lastName}</TableCell> */}
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>{submission.phone || "N/A"}</TableCell>
                      {/* <TableCell>{submission.fields.country || "N/A"}</TableCell> */}
                      <TableCell className="whitespace-pre-wrap max-w-xs truncate hover:whitespace-normal hover:max-w-none">
                        {submission.message}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-slate-300/30">
        <h1 className="text-3xl font-bold text-center text-slate-700 mb-2">
          Admin Login
        </h1>
        <p className="text-center text-slate-500 mb-6">
          Access to Nandita Mukherjee&apos;s site submissions.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Username
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 text-center bg-red-100 p-2 rounded-md border border-red-300">
              {error}
            </p>
          )}
          <div>
            <Button type="submit" className="w-full text-lg font-semibold">
              Login
            </Button>
          </div>
        </form>
        <p className="mt-8 text-xs text-center text-slate-500">
          This is a restricted area. For authorized personnel only.
        </p>
      </div>
    </div>
  );
}
