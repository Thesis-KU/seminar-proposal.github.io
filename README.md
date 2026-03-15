# UAV Imagery Labeling: Solutions and Challenges

**Kuwait University — CS Seminar Proposal, March 2026**

> A seminar proposal exploring the challenges and current solutions for labeling UAV (drone) imagery for object detection.

**Author:** Abeer Alsafran  
**Supervisor:** Dr. Noura Aljeri  
**Department:** Computer Science, College of Science, Kuwait University

---

## Live Site

The proposal is hosted as a GitHub Pages site:  
**https://thesis-ku.github.io/seminar-proposal.github.io**

---

## Abstract

Unmanned Aerial Vehicles (UAVs) have become essential tools across surveillance, healthcare, security, and commercial sectors. However, UAV imagery — characterized by bird's-eye perspectives, varying resolutions, and small object sizes — poses significant challenges for accurate labeling and object detection.

While manual annotation is precise, it is impractical for large-scale applications. Existing automated labeling tools and detection models, primarily trained on ground-level imagery, struggle to generalize to aerial contexts, particularly for small objects in cluttered backgrounds.

---

## Proposal Sections

| Section | Topic |
|---------|-------|
| Abstract | Problem overview and key challenges |
| 1.1 Overview | UAV imagery characteristics and domain challenges |
| 1.2A Datasets | Major UAV benchmark datasets |
| 1.2B Models | Labeling and detection model architectures |
| Analysis | Challenges and potential solution directions |
| Future | Planned research directions and limitations |
| Conclusion | Summary and outlook |
| References | 12 cited + 16 additional references |

---

## Key Challenges

- **Eagle-eye perspective** — models trained on ground-level images fail on aerial views
- **Small object detection** — limited pixel representation at altitude
- **Cluttered backgrounds** — high false-positive rates
- **Variable resolution & altitude** — no fixed imaging conditions
- **Costly manual annotation** — impractical at scale
- **Domain generalization gap** — pre-trained models don't transfer well

---

## Datasets Covered

| Dataset | Focus | Classes |
|---------|-------|---------|
| VisDrone | Small/tiny object detection | 10 |
| UAVDT | Object detection & tracking | 4 |
| AI-TOD | Tiny object detection | 8 |
| DIOR | Remote sensing | 190 |
| EAGLE | Vehicle detection | 2 |

---

## Models Reviewed

**Transformer-based:**
- SAM2 — Mask-based automatic segmentation (Meta AI, 2023)
- Grounding DINO — Text-prompt bounding box generation (Liu et al., 2023)
- Grounded SAM — Combined detection + segmentation (Ren et al., 2024)

**CNN-based:**
- YOLO11 — Multi-task detection, segmentation, pose (Jocher & Qiu, 2024)
- DETR — End-to-end object detection with transformers (Carion et al., 2020)
- Detectron2 — Bounding boxes, segmentation, keypoint detection (Wu et al., 2019)

---

## Future Directions

1. **Incremental dataset training** — Train on sequential 10% portions, using each checkpoint to initialize the next stage
2. **UAV-specific fine-tuning** — Close the domain gap by fine-tuning on VisDrone/UAVDT
3. **Address class imbalance** — Weighted loss functions and oversampling strategies

---

## Repository Structure

```
seminar-proposal.github.io/
├── index.html        # Main proposal page
├── _config.yml       # Jekyll/GitHub Pages configuration
└── assets/
    ├── style.css     # Styling
    └── main.js       # Interactive behavior
```

---

## Tech Stack

- Plain HTML/CSS/JS — no build step required
- Hosted via GitHub Pages
