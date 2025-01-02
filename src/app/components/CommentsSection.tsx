"use client";
import React, { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/solid";

const CommentsSection = () => {
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (error) {
        console.error("Failed to parse comments from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      const newComments = [...comments, { name: name.trim(), text: comment.trim() }];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setName("");
      setComment("");
    } else {
      alert("Please fill in both fields before submitting.");
    }
  };

  return (
    <section className="container max-w-screen-lg mx-auto px-4 py-12 flex items-center flex-col md:flex-row">
      <div className="hidden md:block sm:block sm:w-[7%] md:w-[15%]"></div>

      <div className="sm:w-[85%] md:w-[70%] w-full">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>

        <div className="mb-8">
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <label htmlFor="comment" className="sr-only">Your Comment</label>
          <textarea
            id="comment"
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Add Comment
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((c, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 border border-gray-300 p-4 rounded-md shadow-sm"
            >
              <UserIcon className="h-10 w-10 text-gray-400" />
              <div>
                <p className="font-bold text-gray-800">{c.name}</p>
                <p className="text-gray-600">{c.text}</p>
              </div>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="text-gray-500 text-center animate-pulse">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>

      <div className="hidden md:block sm:block sm:w-[7%] md:w-[15%]"></div>
    </section>
  );
};

export default CommentsSection;
