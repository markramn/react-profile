package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	// Create a new ServeMux
	mux := http.NewServeMux()

	// Combine static file serving and SPA routing
	mux.HandleFunc("/", spaHandler)

	// API routes
	mux.HandleFunc("/api/hello", corsMiddleware(sampleHandler))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s...\n", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}

func spaHandler(w http.ResponseWriter, r *http.Request) {
	// Define the path to the build directory
	buildPath := "../client/build"

	// Check if the requested file exists
	filePath := filepath.Join(buildPath, r.URL.Path)
	_, err := os.Stat(filePath)

	if os.IsNotExist(err) {
		// File doesn't exist, serve index.html
		http.ServeFile(w, r, filepath.Join(buildPath, "index.html"))
		return
	} else if err != nil {
		// For other errors, return a 500 Internal Server Error
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// File exists, serve it directly
	http.ServeFile(w, r, filePath)
}

func sampleHandler(w http.ResponseWriter, r *http.Request) {
	response := map[string]string{"message": "Hello from Go!"}
	json.NewEncoder(w).Encode(response)
}

func corsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	}
}
