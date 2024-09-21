package app.vercel.form_builder_sigma_five.twa;

import android.content.Intent; // Import Intent class
import android.content.pm.ActivityInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.widget.Toast;

import com.google.android.gms.ads.identifier.AdvertisingIdClient;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class LauncherActivity extends com.google.androidbrowserhelper.trusted.LauncherActivity {

    private static final String TAG = "LauncherActivity";
    private String advertisingId = "00000000-0000-0000-0000-000000000000"; // Default value if not fetched
    private boolean isAdIdFetched = false; // Flag to check if the GAID has been fetched

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Set orientation based on Android version
        if (Build.VERSION.SDK_INT > Build.VERSION_CODES.O) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT);
        } else {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
        }

        // Fetch Advertising ID asynchronously
        fetchAdvertisingIdAsync();
    }

    private void fetchAdvertisingIdAsync() {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        executor.execute(() -> {
            try {
                // Fetch the Advertising ID info
                AdvertisingIdClient.Info adInfo = AdvertisingIdClient.getAdvertisingIdInfo(getApplicationContext());
                if (adInfo != null && !adInfo.isLimitAdTrackingEnabled()) {
                    advertisingId = adInfo.getId();
                    isAdIdFetched = true; // Set the flag to true
                    runOnUiThread(() -> {
                        Toast.makeText(this, "Advertising ID fetched: " + advertisingId, Toast.LENGTH_SHORT).show();
                        launchWebView(); // Launch URL after fetching GAID
                    });
                } else {
                    runOnUiThread(() -> Toast.makeText(this, "Limit Ad Tracking is enabled or failed to retrieve Advertising ID.", Toast.LENGTH_SHORT).show());
                    launchWebView(); // Proceed with original URL if GAID fetch fails
                }

            } catch (Exception e) {
                runOnUiThread(() -> Toast.makeText(this, "Failed to get Advertising ID: " + e.getMessage(), Toast.LENGTH_SHORT).show());
                launchWebView(); // Proceed with original URL in case of error
            }
        });
        executor.shutdown();
    }

    private void launchWebView() {
        Uri originalUri = super.getLaunchingUrl();
        if (originalUri != null) {
            // Append GAID if it has been fetched
            Uri finalUri = originalUri.buildUpon()
                    .appendQueryParameter("gaid", advertisingId)
                    .build();
            // Show the final URI in a toast (or start a web activity here)
            Toast.makeText(this, "Launching URL: " + finalUri, Toast.LENGTH_SHORT).show();
            
            // Start the activity with the final URI
            startActivity(new Intent(Intent.ACTION_VIEW, finalUri));
        }
    }
}
